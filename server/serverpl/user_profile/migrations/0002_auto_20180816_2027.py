# Generated by Django 2.1 on 2018-08-16 18:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_profile', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='consumer',
            field=models.CharField(blank=True, choices=[('moodle', 'moodle')], max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='consumer_id',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
        migrations.AlterUniqueTogether(
            name='profile',
            unique_together={('consumer_id', 'consumer_id')},
        ),
    ]
