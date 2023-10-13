from django.contrib.auth.models import User
from django_cas_ng.backends import CASBackend
from django.contrib import messages
from django.conf import settings
import logging

logger = logging.getLogger(__name__)

class MyCASBackend(CASBackend):

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
        firstname, lastname = ''.join(i for i in user.username if not i.isdigit()).split(".")
        user.first_name = firstname
        user.last_name = lastname
        user.email = user.username + "@edu.univ-eiffel.fr"
        print(user)
        print(user.username)
        print(user.first_name)
        print(user.last_name)
        print(user.email)
        user.save()
        return user
    
    def user_can_authenticate(self, user):
        print("--------------------------- user_can_authenticate --------------------------------")
        print(user, "can authenticate")
        raise Exception("user_can_authenticate")
