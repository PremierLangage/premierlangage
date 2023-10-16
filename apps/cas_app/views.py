from django_cas_ng import views as baseviews
from django.views.decorators.csrf import csrf_exempt
import logging 

logger = logging.getLogger(__name__)

@csrf_exempt
def login(request, **kwargs):
    return log_waths_happening(request, baseviews.LoginView.as_view()(request, **kwargs))


def logout(request, **kwargs):
    return log_waths_happening(request, baseviews.LoginView.as_view()(request, **kwargs))


def log_waths_happening(request, response):
    """If the given HttpResponse is a redirect to CAS, then add the proper
    `locale` parameter to it (and return the modified response). If not, simply
    return the original response."""

    print("log_waths_happening")
    print(response)
    print(request)

    return response