import uuid
from django.template.loader import get_template
from django_jinja.backend import Jinja2
from htmlprint import htmlprint

from loader.models import PL
from playexo.models import AnonymousSession



def get_anonymous_uuid(request):
    if "anonymous" not in request.session:
        request.session["anonymous"] = str(uuid.uuid4())
    return request.session["anonymous"]



def get_anonymous_session_exercise(request, pl_id=None):
    """Return the SessionExercice corresponding to self.current_pl.

    If the optionnal parameter 'pl' is given (can be given as None for the PLTP), will instead
    return the SessionExercice corresponding to pl.

    Raise IntegrityError if no session for either self.current_pl or pl (if given) was found."""
    
    try:
        current_pl = PL.objects.get(id=pl_id)
    except PL.DoesNotExist:
        current_pl = None
    if current_pl is None:
        return None
    try:
        return AnonymousSession.objects.get(user_uuid=get_anonymous_uuid(request), pl=current_pl)
    except AnonymousSession.DoesNotExist:
        return AnonymousSession.objects.create(user_uuid=get_anonymous_uuid(request), pl=current_pl)



def anonymous_current_pl_template(request, activity, context=None):
    """Return a template of the PL with the session exercise context.
    If given, will use context instead."""
    env = Jinja2.get_default()
    
    current_pl_id = get_anonymous_current_pl_id(activity.id, request)
    if current_pl_id == -1:
        pl = -1
    else:
        session_exercise = get_anonymous_session_exercise(request, current_pl_id)
        if session_exercise:
            pl = session_exercise.pl
        else:
            pl = None
    
    try:
        if not pl:
            dic = dict(activity.activity_data if not context else context)
            first_pls = activity.indexed_pl()
            if first_pls:
                dic['first_pl__'] = first_pls[0].id
            for key in dic:
                if type(dic[key]) is str:
                    dic[key] = env.from_string(dic[key]).render(context=dic, request=request)
            return get_template("activity/activity_type/pltp/pltp.html").render(dic, request)
        
        elif pl == -1:
            if "sent_activities" not in request.session:
                request.session["sent_activities"] = []
            dic = {
                'activity_id__': activity.id,
                'sent':          activity.id in request.session["sent_activities"],
            }
            return get_template("activity/activity_type/mail_pltp/sender.html").render(dic, request)
        
        else:
            return session_exercise.get_pl(request, context, activity)
    
    except Exception as e:  # pragma: no cover
        error_msg = str(e)
        error_msg += "<br><br>" + htmlprint.html_exc()
        return get_template("playexo/error.html").render({"error_msg": error_msg})



def get_anonymous_current_pl_id(activity_id, request):
    activity_id = str(activity_id)
    if activity_id not in request.session:
        request.session[activity_id] = {}
        request.session[activity_id]["current_pl"] = None
    return request.session[activity_id]["current_pl"]



def set_anonymous_current_pl_id(activity_id, request, pl_id):
    activity_id = str(activity_id)
    if activity_id not in request.session:
        request.session[activity_id] = {}
    request.session[activity_id]["current_pl"] = pl_id
