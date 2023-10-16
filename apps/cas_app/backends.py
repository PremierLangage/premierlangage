from django.contrib.auth.models import User
from django.contrib.auth import get_user_model

from django.http import HttpRequest
from django.shortcuts import get_object_or_404
from django_cas_ng.backends import CASBackend
from django_cas_ng.utils import get_cas_client
from django.contrib import messages
from django.conf import settings
import logging

from activity.models import Activity

logger = logging.getLogger(__name__)

class MyCASBackend(CASBackend):

    def bad_attributes_reject(self, request, username, attributes):
        print("--------------------------- bad_attributes_reject --------------------------------")
        print(attributes)
        print(username)
        print(request)
        return None
    
    def authenticate(self, request : HttpRequest, ticket : str, service : str):
        """
        Verifies CAS ticket and gets or creates User object

        :returns: [User] Authenticated User object or None if authenticate failed.
        """
        print("--------------------------- authenticate --------------------------------")
        print(ticket)
        print(service)
        print(request)

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

            # If we can, we rename the attributes as described in the settings file
            # Existing attributes will be overwritten
            for cas_attr_name, req_attr_name in settings.CAS_RENAME_ATTRIBUTES.items():
                if cas_attr_name in attributes and cas_attr_name is not req_attr_name:
                    attributes[req_attr_name] = attributes[cas_attr_name]
                    attributes.pop(cas_attr_name)

        UserModel = get_user_model()

        # Note that this could be accomplished in one try-except clause, but
        # instead we use get_or_create when creating unknown users since it has
        # built-in safeguards for multiple threads.
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
                if settings.CAS_LOCAL_NAME_FIELD:
                    user_kwargs = {
                        settings.CAS_LOCAL_NAME_FIELD: username

                    }
                    user = UserModel._default_manager.get(**user_kwargs)
                else:
                    user = UserModel._default_manager.get_by_natural_key(username)
            except UserModel.DoesNotExist:
                pass

        if not self.user_can_authenticate(user):
            return None

        if pgtiou and settings.CAS_PROXY_CALLBACK and request:
            request.session['pgtiou'] = pgtiou

        if settings.CAS_APPLY_ATTRIBUTES_TO_USER and attributes:
            # If we are receiving None for any values which cannot be NULL
            # in the User model, set them to an empty string instead.
            # Possibly it would be desirable to let these throw an error
            # and push the responsibility to the CAS provider or remove
            # them from the dictionary entirely instead. Handling these
            # is a little ambiguous.
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

            # If we are keeping a local copy of the user model we
            # should save these attributes which have a corresponding
            # instance in the DB.
            if settings.CAS_CREATE_USER:
                user.save()
        if next.startswith("/activity/play/"):
            # remove all non digit characters from next
            next = ''.join(i for i in next if i.isdigit())
            activity_id = int(next)
            activity = get_object_or_404(Activity, id=activity_id)
            if activity.activity_type == "course":
                activity.add_student_to_all(user)  # add student to all groups

        if user:
            print(f"User ({user}) is authenticated")
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
