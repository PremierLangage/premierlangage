import logging
import time

import htmlprint
from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.template.loader import get_template
from django.utils import timezone
from django_jinja.backend import Jinja2
from jsonfield import JSONField

from components.components import Component, components_source
from loader.models import PL
from playexo.enums import State
from playexo.exception import BuildScriptError, SandboxError
from playexo.request import SandboxBuild, SandboxEval


logger = logging.getLogger(__name__)



def create_seed():
    return int(time.time() % 100)



class SessionExerciseAbstract(models.Model):
    """Abstract class to represent the state of a PL for a given user.
    
    Parameters:
        pl      - PL corresponding to this session (None if it's the PLTP session).
        built   - Whether the session is built (True), or need to be built (False).
        envid   - Must contains the ID of the environment on the sandbox if the session is built.
        context - Dictionnary of the PL (or PLTP)."""
    
    pl = models.ForeignKey(PL, on_delete=models.CASCADE, null=True)
    built = models.BooleanField(default=False)
    envid = models.CharField(max_length=300, null=True)
    context = JSONField(null=True)
    
    
    class Meta:
        abstract = True
    
    
    def add_to_context(self, key, value):
        """Add value corresponding to key in the context."""
        
        current_dic = self.context
        sub_keys = key.split(".")
        for k in sub_keys:
            if k == '':
                raise KeyError("Empty sub-key are not allowed")
        for k in sub_keys[:-1]:  # creating sub dictionnaries
            current_dic[k] = current_dic.get(k, dict())
            current_dic = current_dic[k]
        last_key = sub_keys[-1]
        
        current_dic[last_key] = value
        self.save()
    
    
    def get_from_context(self, key):
        """Get key from context.

        Return False is key does not exists.

        Does implement syntax of PL for nested dict. I.E.: 'dict1.dict2.[...].dictn.val' will return
        'context['dict1']['dict2']...['dictn']['val']"""
        current_dic = self.context
        sub_keys = key.split('.')
        try:
            for k in sub_keys[:-1]:
                current_dic = current_dic[k]
            return current_dic[sub_keys[-1]]
        except KeyError:
            return False
    
    
    def reroll(self, seed, grade=None):
        """Return whether the seed must be reroll (True) or not (False).

        Seed must be reroll if:
            - seed does not exists yet
            - oneshot is set, grade is provided and less than oneshot_threshold
              (100 if not provided)"""
        oneshot = bool(self.get_from_context('settings.oneshot'))
        oneshot_threshold = self.get_from_context('settings.oneshot_threshold')
        oneshot_threshold = (int(oneshot_threshold)
                             if oneshot_threshold and oneshot_threshold.isdigit()
                             else 100)
        return not seed or (oneshot and grade is not None and grade < oneshot_threshold)
    
    
    def raw_evaluate(self, request, answers, test=False):
        """Evaluate the exercise with the given answers according to the current context.
        
        Parameters:
            request - (django.http.request) Current Django request object.
            answers - (dict) Answers of the student.
            test    - (bool) Whether this exercise is in a testing session or not.
        """
        evaluator = SandboxEval(self.envid, answers)
        if not evaluator.check():
            self.build(request, test=test)
            evaluator = SandboxEval(self.envid, answers)
        
        response = evaluator.call()
        
        answer = {
            "answers": answers,
            "user":    request.user,
            "pl":      self.pl,
            "grade":   response['grade'],
        }
        
        if response['status'] < 0:  # Sandbox Error
            feedback = response['feedback']
            if request.user.profile.can_load() and response['sandboxerr']:
                feedback += "<br><hr>Sandbox error:<br>" + htmlprint.code(response['sandboxerr'])
                feedback += "<br><hr>Received on stderr:<br>" + htmlprint.code(response['stderr'])
        
        elif response['status'] > 0:  # Grader Error
            feedback = ("Une erreur s'est produite lors de l'exécution du grader "
                        + ("(exit code: %d, env: %s). Merci de prévenir votre professeur"
                           % (response['status'], response['id'])))
            if request.user.profile.can_load():
                feedback += "<br><hr>Received on stderr:<br>" + htmlprint.code(response['stderr'])
        
        else:  # Success
            feedback = response['feedback']
            if request.user.profile.can_load() and response['stderr']:
                feedback += "<br><br>Received on stderr:<br>" + htmlprint.code(response['stderr'])
        
        self.context.update(response['context'])
        self.context['answers__'] = answers
        self.save()
        
        return answer, feedback, response['status']
    
    
    def evaluate(self, request, answers, test=False):
        """Evaluate the exercise with the given answers according to the current context.
        
        Parameters:
            request - (django.http.request) Current Django request object.
            answers - (dict) Answers of the student.
            test    - (bool) Whether this exercise is in a testing session or not.
        """
        answer, feedback, status = self.raw_evaluate(request, answers, test)
        return answer, feedback
    
    
    def build(self, request, test=False, seed=None):
        """Build the exercise with the given according to the current context.
        
        Parameters:
            request - (django.http.request) Current Django request object.
            test    - (bool) Whether this exercise is in a testing session or not.
        """
        self.context = self.pl.json
        
        if 'components.py' not in self.context:
            self.context['__files']['components.py'] = components_source()
        self.context['seed'] = seed if seed else create_seed()
        self.save()
        
        response = SandboxBuild(dict(self.context), test=test).call()
        
        if response['status'] < 0:
            msg = ("Une erreur s'est produit sur la sandbox (exit code: %d, env: %s)."
                   + " Merci de prévenir votre professeur.") % (response['status'], response['id'])
            if request.user.profile.can_load():
                msg += "<br><br>" + htmlprint.code(response['sandboxerr'])
            raise SandboxError(msg)
        
        if response['status'] > 0:
            msg = ("Une erreur s'est produite lors de l'exécution du script before/build "
                   + ("(exit code: %d, env: %s). Merci de prévenir votre professeur"
                      % (response['status'], response['id'])))
            if request.user.profile.can_load() and response['stderr']:
                msg += "<br><br>Reçu sur stderr:<br>" + htmlprint.code(response['stderr'])
            raise BuildScriptError(msg)
        
        context = dict(response['context'])
        keys = list(response.keys())
        for key in keys:
            response[key + "__"] = response[key]
        for key in keys:
            del response[key]
        del response['context__']
        
        context.update(response)
        self.envid = response['id__']
        self.context.update(context)
        self.built = True
        self.save()
    
    
    def render(self, template, context, request):
        env = Jinja2.get_default()
        for k, v in context.items():
            if isinstance(v, str):
                context[k] = env.from_string(v).render(
                    context=context,
                    request=request
                )
        
        return get_template(template).render({
            "__components": Component.from_context(context),
            **context
        }, request)



class SessionExercise(SessionExerciseAbstract):
    """Class representing the state of a PL inside of a SessionActivity.
    
    Parameters:
        pl      - PL corresponding to this session (None if it's the PLTP session).
        built   - Whether the session is built (True), or need to be built (False).
        envid   - Must contains the ID of the environment on the sandbox if the session is built.
        context - Dictionnary of the PL (or PLTP).
        session_activity - SessionActivity to which this SessionExercise belong."""
    session_activity = models.ForeignKey("activity.SessionActivity", on_delete=models.CASCADE)
    
    
    class Meta:
        unique_together = ('pl', 'session_activity')
    
    
    @receiver(post_save, sender="activity.SessionActivity")
    def create_session_exercise(sender, instance, created, **kwargs):
        """When an ActivitySession is created, automatically create a SessionExercise for the PLTP
        and every PL."""
        if created:
            for pl in instance.activity.indexed_pl():
                SessionExercise.objects.create(session_activity=instance, pl=pl)
            SessionExercise.objects.create(session_activity=instance)  # For the pltp
    
    
    def save(self, *args, **kwargs):
        """Automatically add the PL/PLTP json content to the context if context is empty when
        saving."""
        if not self.context:
            if self.pl:
                self.context = dict(self.pl.json)
            else:
                self.context = dict(self.session_activity.activity.activity_data)
        if 'activity_id__' not in self.context:
            self.context['activity_id__'] = self.session_activity.activity.id
        super().save(*args, **kwargs)
    
    
    def get_pl(self, request, context):
        """Return a template of the PL rendered with context."""
        pl = self.pl
        highest_grade = Answer.highest_grade(pl, self.session_activity.user)
        last = Answer.last(pl, self.session_activity.user)
        
        seed = (last.seed if last else
                self.context['seed'] if 'seed' in self.context else
                None)
        if highest_grade is not None and self.reroll(seed, highest_grade.grade):
            seed = create_seed()
            self.built = False
        self.add_to_context('seed', seed)
        
        if not self.built:
            self.build(request)
        
        dic = {
            **self.context,
            **{
                'user_settings__': self.session_activity.user.profile,
                'user__':          self.session_activity.user,
                'pl_id__':         pl.id,
                'answers__':       last.answers if last else {},
                'grade__':         highest_grade.grade if highest_grade else None,
            },
        }
        if context:
            dic = {**context, **dic}
        
        return self.render('playexo/pl.html', dic, request)


class SessionTest(SessionExerciseAbstract):
    """Class representing the state of a PL inside of a SessionActivity.
    
    Parameters:
        pl      - PL corresponding to this session.
        built   - Whether the session is built (True), or need to be built (False).
        envid   - Must contains the ID of the environment on the sandbox if the session is built.
        context - Dictionnary of the PL (or PLTP).
        user    - User currently testing a PL.
        date    - Date of the creation of the session.
        
    When the number of session for an user exceed MAX_SESSION_PER_USER, older session are deleted.
    """
    MAX_SESSION_PER_USER = 100
    
    pl = models.ForeignKey(PL, on_delete=models.CASCADE, null=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    date = models.DateTimeField(default=timezone.now, null=False)
    
    
    def save(self, *args, **kwargs):
        """Automatically add the PL's json content to the context if context is empty when
        saving. Will also delete outdated session."""
        if not self.context:
            self.context = dict(self.pl.json)
        
        q = SessionTest.objects.filter(user=self.user).order_by("-date")
        if len(q) >= self.MAX_SESSION_PER_USER:
            q[0].delete()
        
        super().save(*args, **kwargs)
    
    
    def get_pl(self, request, answer=None, template=None):
        """Return a template of the PL rendered with context.
        
        If answer is given, will determine if the seed must be reroll base on its grade."""
        pl = self.pl
        seed = self.context['seed'] if 'seed' in self.context else None
        if self.reroll(seed, answer['grade'] if answer else None):
            seed = create_seed()
            self.built = False
            self.add_to_context('seed', seed)
        
        if not self.built:
            self.build(request, test=True)
        
        dic = {
            **self.context,
            'user_settings__': self.user.profile,
            'session__':       self,
            'user__':          self.user,
            'pl_id__':         pl.id,
        }
        template = template if template else "playexo/preview.html"
        return self.render(template, dic, request)
    
    
    def get_exercise(self, request, answer=None):
        """Return a template of the PL.
        
        If answer is given, will determine if the seed must be reroll base on its grade."""
        try:
            return self.get_pl(request, answer)
        except Exception as e:  # pragma: no cover
            error_msg = str(e)
            if request.user.profile.can_load():
                error_msg += "<br><br>" + htmlprint.html_exc()
            return get_template("playexo/error.html").render({
                "error_msg": error_msg
            })



class Answer(models.Model):
    answers = JSONField(default='{}')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    pl = models.ForeignKey(PL, on_delete=models.CASCADE)
    activity = models.ForeignKey("activity.Activity", null=True, on_delete=models.CASCADE)
    seed = models.CharField(max_length=100, default=create_seed)
    date = models.DateTimeField(default=timezone.now)
    grade = models.IntegerField(null=True)
    
    
    @staticmethod
    def highest_grade(pl, user):
        null = list(Answer.objects.filter(pl=pl, user=user).filter(grade__isnull=True))
        answers = list(Answer.objects.filter(pl=pl, user=user)
                       .filter(grade__isnull=False).order_by("-grade"))
        return (answers + null)[0] if (answers + null) else None
    
    
    @staticmethod
    def last(pl, user):
        answers = Answer.objects.filter(pl=pl, user=user).order_by("-date")
        return None if not answers else answers[0]
    
    
    @staticmethod
    def pl_state(pl, user):
        """Return the state of the answer with the highest grade."""
        answer = Answer.highest_grade(pl, user)
        return State.by_grade(answer.grade if answer else ...)
    
    
    @staticmethod
    def pltp_state(activity, user):
        """Return a list of tuples (pl_id, state) where state follow pl_state() rules."""
        return [(pl.id, Answer.pl_state(pl, user)) for pl in activity.indexed_pl()]
    
    
    @staticmethod
    def activity_summary(activity, user):
        """
            Give information about the PLTP's completion of this user as a dict of 5 lists:
            {
                'succeeded':   [ % succeeded, nbr succeeded],
                'part_succ':   [ % part_succ, nbr part_succ],
                'failed':      [ % failed, nbr failed],
                'started:      [ % started, nbr started],
                'not_started': [ % not started, nbr not started],
                'error':       [ % error, nbr error],
            }
            
            All data are strings."""
        state = {
            State.SUCCEEDED:   [0.0, 0],
            State.PART_SUCC:   [0.0, 0],
            State.FAILED:      [0.0, 0],
            State.STARTED:     [0.0, 0],
            State.NOT_STARTED: [0.0, 0],
            State.ERROR:       [0.0, 0],
        }
        
        for pl in activity.indexed_pl():
            state[Answer.pl_state(pl, user)][1] += 1
        
        nb_pl = max(sum([state[k][1] for k in state]), 1)
        for k, v in state.items():
            state[k] = [str(state[k][1] * 100 / nb_pl), str(state[k][1])]
        
        return state
    
    
    @staticmethod
    def course_state(course):
        """
            Return every pltp state of every user of this course as a list of dicts:
            {
                'user_id': id,
                'pltp_sha1': sha1,
                'pl': list(pl_id, state)
            }
            where 'state' follow pl_state() rules.
        """
        
        lst = list()
        for user in (list(course.student.all()) + list(course.teacher.all())):
            dct = dict()
            dct['user_id'] = user.id
            for activity in course.activity_set.all():
                dct['pl'] = Answer.pltp_state(activity, user)
            lst.append(dct)
        
        return lst
    
    
    @staticmethod
    def user_course_summary(course, user):
        """Give information about the completion of every PL of this
            user in course as a dict of 5 tuples:
            {
                'succeeded':   [ % succeeded, nbr succeeded],
                'part_succ':   [ % part_succ, nbr part_succ],
                'failed':      [ % failed, nbr failed],
                'started:      [ % started, nbr started],
                'not_started': [ % not started, nbr not started],
                'error':       [ % error, nbr error],
            }
            
            All data are strings."""
        state = {
            State.SUCCEEDED:   [0.0, 0],
            State.PART_SUCC:   [0.0, 0],
            State.FAILED:      [0.0, 0],
            State.STARTED:     [0.0, 0],
            State.NOT_STARTED: [0.0, 0],
            State.ERROR:       [0.0, 0],
        }
        
        for activity in course.activity_set.all():
            summary = Answer.pltp_summary(activity, user)
            for k in summary:
                state[k][1] += int(summary[k][1])
        
        nb_pl = max(sum([state[k][1] for k in state]), 1)
        for k, v in state.items():
            state[k] = [str(state[k][1] * 100 / nb_pl), str(state[k][1])]
        
        return state
