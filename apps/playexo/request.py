#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  request.py
#
#  Copyright 2017 Dominique Revuz <dr@univ-mlv.fr>
#
import json
import logging
import os

import requests
from django.conf import settings

from playexo.exception import SandboxUnavailable
from playexo.utils import tar_from_dic, make_data, get_sandboxerr_build, get_sandboxerr_eval

logger = logging.getLogger(__name__)


class SandboxBuild:

    def __init__(self, dic, sandbox=None, test=False):
        self.sandbox = settings.SANDBOX if sandbox is None else sandbox
        self.dic = dict(dic)
        self.test = test

    def _build_env(self):
        env = dict(self.dic['__files'])
        tmp = self.dic
        del tmp['__files']

        env['pl.json'] = json.dumps(tmp)

        if 'grader' in self.dic and 'grader.py' not in env:
            env['grader.py'] = self.dic['grader']

        if 'builder' in self.dic and 'builder.py' not in env:
            env['builder.py'] = self.dic['builder']

        for item in os.listdir(settings.DOCKER_DEFAULT_FILES):
            s = os.path.join(settings.DOCKER_DEFAULT_FILES, item)
            with open(s, "r") as f:
                env[item] = f.read()

        return env

    def call(self, request_timeout=10):
        files = {'environment': tar_from_dic(self._build_env())}
        commands = ['chmod +x builder.sh', './builder.sh']
        data = make_data(commands, True)
        logger.info("Building on sandbox '" + self.sandbox + "'.")
        url = os.path.join(self.sandbox, "execute/")
        try:
            response = requests.post(url, data=data, files=files, timeout=request_timeout)
            response = json.loads(response.text)
            response['stderr'] = response['execution'][1]['stderr']
            del response['execution']
            response['sandboxerr'] = get_sandboxerr_build(response['status'], request_timeout)
            context = requests.get(os.path.join(
                self.sandbox,
                "files/%s/processed.json/") % response["environment"])
            response["context"] = json.loads(context.text)
            response["id"] = response["environment"]
            del response["environment"]
        except json.decoder.JSONDecodeError:  # pragma: no cover
            msg = "Sandbox '" + url + "' returned a non JSON response:\n" + response.text
            logger.critical(msg)
            raise SandboxUnavailable(msg)
        except Exception:
            msg = "Could not join the sandbox '" + url + "'."
            logger.exception(msg)
            raise SandboxUnavailable(msg)
        return response


class SandboxEval:

    def __init__(self, uuid, answers, sandbox=None):
        self.uuid = uuid
        self.sandbox = settings.SANDBOX if sandbox is None else sandbox
        self.answers = answers

    def check(self):
        url = os.path.join(self.sandbox, "environments/%s/")
        try:
            r = requests.head(url % str(self.uuid), timeout=1)
            return 200 <= r.status_code <= 299
        except Exception:
            msg = "Could not join the sandbox '" + url + "'."
            logger.exception(msg)
            raise SandboxUnavailable(msg)

    def call(self, request_timeout=10):
        logger.info("Evaluating on sandbox '" + self.sandbox + "'.")
        files = {'environment': tar_from_dic({'answers.json': json.dumps(self.answers), })}
        commands = ['chmod +x grader.sh', './grader.sh']
        data = make_data(commands, True, self.uuid)
        url = os.path.join(self.sandbox, "execute/")
        try:
            response = requests.post(url, data=data, files=files, timeout=request_timeout)
            response = json.loads(response.text)
            command = response['execution'][1]
            response["grade"] = command["stdout"] if not command["exit_code"] else -1
            response["stderr"] = command["stderr"]
            del response['execution']
            feedback = requests.get(os.path.join(
                self.sandbox,
                "files/%s/feedback.html/") % str(response['environment']))
            response["feedback"] = feedback.text
            processed = requests.get(os.path.join(
                self.sandbox,
                "files/%s/processed.json/") % str(response['environment']))
            response["context"] = json.loads(processed.text)
            response["sandboxerr"] = get_sandboxerr_eval(response["status"], request_timeout)
            response["id"] = response["environment"]
            del response["environment"]

        except json.decoder.JSONDecodeError:  # pragma: no cover
            msg = "Sandbox '" + url + "' returned a non JSON response:\n" + response.text
            logger.critical(msg)
            raise SandboxUnavailable(msg)
        except Exception:
            msg = "Could not join the sandbox '" + url + "'."
            logger.exception(msg)
            raise SandboxUnavailable(msg)
        return response
