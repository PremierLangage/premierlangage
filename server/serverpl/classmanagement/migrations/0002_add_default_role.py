# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations

from classmanagement.models import Role as Base_Role


def forwards_func(apps, schema_editor):
    Role = apps.get_model("classmanagement", "Role")
    db_alias = schema_editor.connection.alias
    Role.objects.using(db_alias).bulk_create([
        Role(role = Base_Role.ADMINISTRATOR),
        Role(role = Base_Role.LEARNER),
        Role(role = Base_Role.CONTENT_DEVELOPER),
        Role(role = Base_Role.INSTRUCTOR),
        Role(role = Base_Role.OBSERVER),
    ])

def reverse_func(apps, schema_editor):
    Role = apps.get_model("classmanagement", "Role")
    db_alias = schema_editor.connection.alias
    Role.objects.using(db_alias).filter(role = Base_Role.ADMINISTRATOR).delete()
    Role.objects.using(db_alias).filter(role = Base_Role.LEARNER).delete()
    Role.objects.using(db_alias).filter(role = Base_Role.CONTENT_DEVELOPER).delete()
    Role.objects.using(db_alias).filter(role = Base_Role.INSTRUCTOR).delete()
    Role.objects.using(db_alias).filter(role = Base_Role.OBSERVER).delete()
    

class Migration(migrations.Migration):

    dependencies = [
        ('classmanagement', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(forwards_func, reverse_func),
    ]
