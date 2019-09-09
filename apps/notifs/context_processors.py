from notifs.models import Notifications



def add_notifs_processor(request):
    if request.user.is_authenticated:
        notifs = Notifications.objects.filter(user=request.user)
        return {"notifications": notifs, "count": len(notifs)}
    return {}
