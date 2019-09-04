from notifs.models import Notifications



def add_notifs_processor(request):
    if request.user.is_authenticated :
        return {"notifications": Notifications.objects.filter(user=request.user)}
    return {}



