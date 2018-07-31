import datetime

from django.contrib.auth.decorators import login_required
from django.core.exceptions import PermissionDenied
from django.utils.decorators import method_decorator
from django.views.generic import View


class LoginRequired(View):
    """
    Redirects to login if user is anonymous
    """
    @method_decorator(login_required)
    def dispatch(self, *args, **kwargs):
        return super(LoginRequired, self).dispatch(*args, **kwargs)


class AuthorRequiredMixin(View):
    def dispatch(self, request, *args, **kwargs):
        obj = self.get_object()
        if obj.user != self.request.user:
            raise PermissionDenied

        return super(
            AuthorRequiredMixin, self).dispatch(request, *args, **kwargs)


class DateMixin():
    """Provide a method indicating how much time ago something was created according to pub_date
    field."""
    
    def date(self):
        now = datetime.datetime.now()
        delta = now - self.pub_date.replace(tzinfo=None)
        minutes = delta.seconds//60
        hours = minutes//60
        if delta.days == 0:
            if hours == 0:
                if minutes == 0:
                    return "just now"
                else:
                    return str(minutes) + " minutes ago"
            else:
                return str(hours) + " hours ago"
        if delta.days < 30:
            return str(delta.days) + " days ago"
        else:
            return "at " + str(self.pubdate)
