from notifs.models import Notifications



def add_notifs_processor(request):
    return {"notifications": Notifications.objects.filter(user=request.user)}
