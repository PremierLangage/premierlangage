# Generated by Django 2.1 on 2018-08-11 23:57

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django_markdown.models
import hitcount.models
import qa.mixins
import taggit.managers


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('taggit', '0002_auto_20150616_2121'),
    ]

    operations = [
        migrations.CreateModel(
            name='QAAnswer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('answer_text', django_markdown.models.MarkdownField()),
                ('pub_date', models.DateTimeField(auto_now_add=True, verbose_name='date published')),
                ('update_date', models.DateTimeField(null=True, verbose_name='date updated')),
                ('answer', models.BooleanField(default=False)),
                ('points', models.IntegerField(default=0)),
            ],
            options={
                'ordering': ['-answer', '-pub_date'],
            },
            bases=(models.Model, qa.mixins.DateMixin),
        ),
        migrations.CreateModel(
            name='QAAnswerComment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pub_date', models.DateTimeField(auto_now_add=True, verbose_name='date published')),
                ('update_date', models.DateTimeField(null=True, verbose_name='date updated')),
                ('comment_text', models.CharField(max_length=400)),
                ('answer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='qa.QAAnswer')),
                ('update_user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='updated_answer_comment', to=settings.AUTH_USER_MODEL)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
            bases=(models.Model, qa.mixins.DateMixin),
        ),
        migrations.CreateModel(
            name='QAAnswerVote',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('value', models.BooleanField(default=True)),
                ('answer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='qa.QAAnswer')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='QAQuestion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.SlugField(max_length=200)),
                ('title', models.CharField(max_length=200)),
                ('description', django_markdown.models.MarkdownField()),
                ('pub_date', models.DateTimeField(auto_now_add=True, verbose_name='date published')),
                ('update_date', models.DateTimeField(null=True, verbose_name='date updated')),
                ('closed', models.BooleanField(default=False)),
                ('points', models.IntegerField(default=0)),
                ('popularity', models.FloatField(default=0)),
                ('tags', taggit.managers.TaggableManager(help_text='A comma-separated list of tags.', through='taggit.TaggedItem', to='taggit.Tag', verbose_name='Tags')),
                ('update_user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='updated_question', to=settings.AUTH_USER_MODEL)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
            bases=(models.Model, hitcount.models.HitCountMixin, qa.mixins.DateMixin),
        ),
        migrations.CreateModel(
            name='QAQuestionComment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pub_date', models.DateTimeField(auto_now_add=True, verbose_name='date published')),
                ('update_date', models.DateTimeField(null=True, verbose_name='date updated')),
                ('comment_text', models.CharField(max_length=400)),
                ('question', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='qa.QAQuestion')),
                ('update_user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='updated_question_comment', to=settings.AUTH_USER_MODEL)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
            bases=(models.Model, qa.mixins.DateMixin),
        ),
        migrations.CreateModel(
            name='QAQuestionVote',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('value', models.BooleanField(default=True)),
                ('question', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='qa.QAQuestion')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='qaanswer',
            name='question',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='qa.QAQuestion'),
        ),
        migrations.AddField(
            model_name='qaanswer',
            name='update_user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='updated_answer', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='qaanswer',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterUniqueTogether(
            name='qaquestionvote',
            unique_together={('user', 'question')},
        ),
        migrations.AlterUniqueTogether(
            name='qaanswervote',
            unique_together={('user', 'answer')},
        ),
    ]
