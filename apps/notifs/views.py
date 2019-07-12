from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from tastypie.utils.timezone import now

from .models import Notifications



@login_required
def index(request):
    notifications_lst = list(Notifications.objects.filter(user=request.user))
    return render(request,
                  "notifs/index.html",
                  {'notifications_list': notifications_lst}
                  )
