from django.contrib.auth.models import User
from django.contrib.auth import get_user_model

from django.http import HttpRequest
from django.shortcuts import get_object_or_404
from django_cas_ng.backends import CASBackend
from django_cas_ng.utils import get_cas_client
from django.contrib import messages
from django.conf import settings
from django.contrib import auth

import logging

from activity.models import Activity

logger = logging.getLogger(__name__)


def get_or_none(model, **kwargs):
        try:
            return model.objects.get(**kwargs)
        except model.DoesNotExist:
            return None

def tp_note_register_user(next, user):
    if next and next.startswith("/tpnote/"):
        next = ''.join(i for i in next if i.isdigit())
        activity_id = int(next)
        activity = get_object_or_404(Activity, id=activity_id)
        if activity.activity_type == "course":
            activity.add_student_to_all(user)

class MyCASBackend(CASBackend):
    
    def authenticate(self, request : HttpRequest, ticket : str, service : str):
        """
        Verifies CAS ticket and gets or creates User object

        :returns: [User] Authenticated User object or None if authenticate failed.
        """

        next = request.GET.get('next', None)

        client = get_cas_client(service_url=service, request=request)
        username, attributes, pgtiou = client.verify_ticket(ticket)

        if attributes and request:
            request.session['attributes'] = attributes
        
        if settings.CAS_USERNAME_ATTRIBUTE != 'cas:user' and settings.CAS_VERSION != 'CAS_2_SAML_1_0':
            if attributes:
                username = attributes.get(settings.CAS_USERNAME_ATTRIBUTE)
            else:
                return None

        if not username:
            return None
        user = None
        username = self.clean_username(username)

        if attributes:
            reject = self.bad_attributes_reject(request, username, attributes)
            if reject:
                return None

            for cas_attr_name, req_attr_name in settings.CAS_RENAME_ATTRIBUTES.items():
                if cas_attr_name in attributes and cas_attr_name is not req_attr_name:
                    attributes[req_attr_name] = attributes[cas_attr_name]
                    attributes.pop(cas_attr_name)

        UserModel = get_user_model()

        if settings.CAS_CREATE_USER:
            user_kwargs = {
                UserModel.USERNAME_FIELD: username
            }
            if settings.CAS_CREATE_USER_WITH_ID:
                user_kwargs['id'] = self.get_user_id(attributes)

            user, created = UserModel._default_manager.get_or_create(**user_kwargs)
            if created:
                user = self.configure_user(user)
        else:
            created = False
            try:
                user_kwargs = {
                    UserModel.EMAIL_FIELD: username + "@univ-eiffel.fr"
                }
                user = get_or_none(UserModel, **user_kwargs)
                if not user: 
                    user_kwargs = {
                        UserModel.EMAIL_FIELD: username + "@edu.univ-eiffel.fr"
                    }
                    user = UserModel._default_manager.get(**user_kwargs)
            except UserModel.DoesNotExist:
                pass

        if not self.user_can_authenticate(user):
            return None
        
        if pgtiou and settings.CAS_PROXY_CALLBACK and request:
            request.session['pgtiou'] = pgtiou
        
        if settings.CAS_APPLY_ATTRIBUTES_TO_USER and attributes:
            user_model_fields = UserModel._meta.fields
            for field in user_model_fields:
                # Handle null -> '' conversions mentioned above
                if not field.null:
                    try:
                        if attributes[field.name] is None:
                            attributes[field.name] = ''
                    except KeyError:
                        continue
                # Coerce boolean strings into true booleans
                if field.get_internal_type() == 'BooleanField':
                    try:
                        boolean_value = attributes[field.name] == 'True'
                        attributes[field.name] = boolean_value
                    except KeyError:
                        continue

            user.__dict__.update(attributes)
            if settings.CAS_CREATE_USER:
                user.save()

        # TP note feature 
        tp_note_register_user(next, user)

        return user
    

    def configure_user(self, user: User) -> User:
        logger.debug("--------------------------- configure_user --------------------------------")

        fullname = ''.join(i for i in user.username if not i.isdigit()).split(".")
        if len(fullname) == 2: # if there is a firstname and a lastname
            firstname = fullname[0].capitalize()
            lastname = fullname[1].capitalize()
        else: # if there is only a lastname
            lastname = user.username.capitalize()
            firstname = ""
        
        user.first_name = firstname
        user.last_name = lastname
        user.email = user.username + "@edu.univ-eiffel.fr"
        logger.debug(user)
        logger.debug(user.username)
        logger.debug(user.first_name)
        logger.debug(user.last_name)
        logger.debug(user.email)
        user.save()
        return user
    
    def user_can_authenticate(self, user):
        logger.debug("--------------------------- user_can_authenticate --------------------------------")
        logger.debug(user, "can authenticate")
        is_active = getattr(user, 'is_active', None)
        return is_active or is_active is None
