from playexo.strategy import StrategyAPI

def get_last_answered_index(request, activity):
    strat = StrategyAPI(activity)
    pls = strat.get_pl_list()
    i = 0
    for pl in pls:
        if not strat.get_last_good_answer(pl, request):
            return i
        i += 1
    return 0

def strategy(request, activity):
    """ Process request to determine what do to. Should return an HttpResponse. """
    
    strat = StrategyAPI(activity)
    current = get_last_answered_index(request, activity)
        
    if request.method == 'GET': # Request changing which exercise will be loaded
        action = request.GET.get("action", None)
        if action == "pl":
            strat.set_pl(strat.get_pl_sha1(request.GET.get("pl_sha1", None)), request)
            return HttpResponseRedirect("/playexo/activity/") # Remove get parameters from url
        elif action == "pltp":
            pl = strat.get_current_pl(request)
            if (pl):
                can_do = pl.sha1;
            strat.set_pl(None, request)
    
    dic = strat.get_pl_dic(strat.get_current_pl(request))
    if 'oneshot' in dic and dic['oneshot'] == 'True':
        seed = None
    else:
        seed = strat.get_seed_from_answer(strat.get_last_answer(strat.get_current_pl(request), request))
    exercise = strat.load_exercise(request, seed)
    
    if request.method == 'GET': # Request changing or interacting an exercise
        if action == "reset":
            strat.reset_pl(exercise)
        elif action == "next":
            pl = strat.get_next_pl(request)
            strat.set_pl(pl, request)
            return HttpResponseRedirect("/playexo/activity/") # Remove get parameters from url
    
    if request.method == 'POST':
        state, feedback = strat.evaluate(exercise, request)
        return strat.send_evaluate_feedback(state, feedback)
    
    strat.add_to_context(exercise, 'current_auth', current)
    return strat.render(exercise, request)
