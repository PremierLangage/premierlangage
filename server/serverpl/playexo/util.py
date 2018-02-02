#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Python [Version]
#
#  Author: Coumes Quentin     Mail: qcoumes@etud.u-pem.fr
#  Created: 2017-07-05
#  Last Modified: 2017-07-05


import json

from django.http import HttpResponse

from gitload.models import PL

from playexo.models import Answer


def ajax(request, exercise):
    status = json.loads(request.body.decode())
    if status['requested_action'] == 'submit': # Validate
        success, feedback = exercise.evaluate(status['inputs'])
        if 'answer' in status['inputs']:
            value = status['inputs']['answer']
        else:
            value = ""
        if success == None:
            feedback_type = "info"
            Answer(value=value, user=request.user, pl=PL.objects.get(sha1=exercise.dic['pl_sha1']), seed=exercise.dic['seed'], state=Answer.STARTED).save()
        elif success:
            feedback_type = "success"
            Answer(value=value, user=request.user, pl=PL.objects.get(sha1=exercise.dic['pl_sha1']), seed=exercise.dic['seed'], state=Answer.SUCCEEDED).save()
        else:
            feedback_type = "fail"
            Answer(value=value, user=request.user, pl=PL.objects.get(sha1=exercise.dic['pl_sha1']), seed=exercise.dic['seed'], state=Answer.FAILED).save()
        return HttpResponse(json.dumps({'feedback_type': feedback_type, 'feedback': feedback}), content_type='application/json')
    
    elif status['requested_action'] == 'save': # Save
        if 'answer' in status['inputs']:
            value = status['inputs']['answer']
        else:
            value = ""
        Answer(value=value, user=request.user, pl=PL.objects.get(sha1=exercise.dic['pl_sha1']), seed=exercise.dic['seed'], state=Answer.STARTED).save()
        return HttpResponse(json.dumps({'feedback_type': "info", 'feedback': "Votre réponse à bien été enregistrée."}), content_type='application/json')

    return None # Not an AJAX request



def next_pl(activity_id):
    try:
        pl_sha1 = None
        activity = Activity.objects.get(id=activity_id)
        pl = activity.pltp.pl.all()
        current = False
        for item in pl:
            if item.sha1 == exercise.dic["pl_sha1"]:
                current = True
            elif current:
                pl_sha1 = item.sha1
                break
    except Exception as e:
        raise Http404("Impossible d'accéder à l'exercice suivant ("+str(e)+"). Merci de contacter votre professeur.")
    
    return None if not pl_sha1 else pl_sha1



def load_exercise(request, activity_id, pl_sha1=None):
    seed = None
    activity = Activity.objects.get(id=activity_id)
    pl = None
    if pl_sha1:
        pl = PL.objects.get(sha1=pl_sha1)
        dic = json.loads(pl.json)
        try:
            if "oneshot" not in dic: # Retrieving seed if the user already answered once this PL
                seed = Answer.objects.filter(user=request.user, pl=pl)[0].seed
        except: #No existing answer
            pass
    exercise = PythonBuilder(request, activity, pl, seed).get_exercise()
    request.session['exercise'] = exercise.dic
    return redirect(activity_view) # Remove get parameters from url
