from django_cas_ng import views as baseviews
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import PermissionDenied
import logging 

logger = logging.getLogger(__name__)

@csrf_exempt
def login(request, **kwargs):
    try:
        return log_waths_happening(request, baseviews.LoginView.as_view()(request, **kwargs))
    except PermissionDenied:
        raise PermissionDenied("S'il s'agit de votre première connexion veuillez vous connecter par LTI. (Moodle, E-Learning, etc.)")



def logout(request, **kwargs):
    return log_waths_happening(request, baseviews.LoginView.as_view()(request, **kwargs))


def log_waths_happening(request, response):
    """If the given HttpResponse is a redirect to CAS, then add the proper
    `locale` parameter to it (and return the modified response). If not, simply
    return the original response."""

    logger.debug("log_waths_happening")
    logger.debug(response)
    logger.debug(request)

    return response
