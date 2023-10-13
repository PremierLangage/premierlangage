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
        print("--------------------------- bad_attributes_reject --------------------------------")
        print(attributes)
        print(username)
        print(request)
        return None
    
    def authenticate(self, request, ticket, service):
        print("--------------------------- authenticate --------------------------------")
        print(ticket)
        print(service)
        print(request)
        user = super().authenticate(request, ticket, service)
        print(user)
        if user:
            print("User is authenticated")
        return user
    

    def configure_user(self, user: User) -> User:
        print("--------------------------- configure_user --------------------------------")
        return super().configure_user(user)
