from django.contrib.auth.models import User
from django_cas_ng.backends import CASBackend
from django.contrib import messages
from django.conf import settings
import logging

logger = logging.getLogger(__name__)

class MyCASBackend(CASBackend):
    def user_can_authenticate(self, user):
        return True

    def bad_attributes_reject(self, request, username, attributes):
        logger.debug("--------------------------- bad_attributes_reject --------------------------------")
        logger.debug(attributes)
        logger.debug(username)
        logger.debug(request)
        return None
    
    def authenticate(self, request, ticket, service):
        logger.debug("--------------------------- authenticate --------------------------------")
        logger.debug(ticket)
        logger.debug(service)
        logger.debug(request)
        user = super().authenticate(request, ticket, service)
        logger.debug(user)
        if user:
            logger.debug("User is authenticated")
        return user
    

    def configure_user(self, user: User) -> User:
        logger.debug("--------------------------- configure_user --------------------------------")
        return super().configure_user(user)
