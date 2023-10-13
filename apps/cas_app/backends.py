from django_cas_ng.backends import CASBackend
from django.contrib import messages
from django.conf import settings
import logging

logger = logging.getLogger(__name__)

class MyCASBackend(CASBackend):
    def user_can_authenticate(self, user):
        return True

    def bad_attributes_reject(self, request, username, attributes):
        logger.info("--------------------------- bad_attributes_reject --------------------------------")
        logger.info(attributes)
        logger.info(username)
        logger.info(request)
        return None
