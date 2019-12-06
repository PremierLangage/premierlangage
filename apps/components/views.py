from django.contrib.auth import login
from django.contrib.auth.models import User
from django.shortcuts import redirect, render
from django.urls import reverse



def index(request):
    if not request.user.is_authenticated:
        login(request, User.objects.get(username="Anonymous"),
              backend="django.contrib.auth.backends.ModelBackend")
        return redirect(reverse("components:index"))
    
    return render(request, 'components/index.html')
