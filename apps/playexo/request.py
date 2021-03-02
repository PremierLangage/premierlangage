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
from playexo.utils import tar_from_dic
from playexo.utils import make_data
from playexo.utils import get_sandboxerr_build
from playexo.utils import get_sandboxerr_eval
from playexo.utils import get_file_from_env

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
        env = self._build_env()
        files = {'environment': tar_from_dic(env)}
        commands = ['chmod +x builder.sh', './builder.sh', 'ls']
        data = make_data(commands, True, )
        logger.info("Building on sandbox '" + self.sandbox + "'.")
        url = os.path.join(self.sandbox, "execute/")
        try:
            response = requests.post(url, data=data, files=files, timeout=request_timeout)
            response = json.loads(response.text)
<<<<<<< HEAD
            print("RESPONSE = ", response)
=======
            response["id"] = response["environment"]
>>>>>>> d07a0d4dce2487d07f78038a167d19a58642fe62
            response['stderr'] = response['execution'][1]['stderr']
            response['sandboxerr'] = get_sandboxerr_build(response['status'], request_timeout)
<<<<<<< HEAD
            if (requests.head(os.path.join(
                    self.sandbox,
                    "files/%s/processed.json/") % response["environment"])):
                context = requests.get(os.path.join(
                    self.sandbox,
                    "files/%s/processed.json/") % response["environment"])
                response["context"] = json.loads(context.text)
            response["id"] = response["environment"]
=======
            stderr = get_file_from_env(requests, self.sandbox, "stderr.log", response["id"])
            if stderr is not None:
                response["stderr"] = stderr
            if response['status'] != 0:
                if "JSONDecodeError" in response['stderr']:
                    response['status'] = -1
                return response
            context = get_file_from_env(requests, self.sandbox, "processed.json", response["id"])
            if context is not None:
                response["context"] = json.loads(context)
                tmp = self.dic
                for key in response["context"]:
                    if "test" in key or "soluce" in key:
                        tmp[key] = response["context"][key]
                response2 = requests.post(url,
                                          data=make_data(['echo'], True, environment=response["environment"]),
                                          files={'environment': tar_from_dic({'pl.json': json.dumps(tmp)})}
                                          )
                response2 = json.loads(response2.text)
                response["id"] = response2["environment"]
            else:
                response['status'] = -1
>>>>>>> d07a0d4dce2487d07f78038a167d19a58642fe62
            del response["environment"]
            del response['execution']
        except json.decoder.JSONDecodeError:  # pragma: no cover
            msg = "Sandbox '" + url + "' returned a non JSON response\n"
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
        files = {'environment': tar_from_dic({'answers.json': json.dumps(self.answers)})}
        commands = ['chmod +x grader.sh', './grader.sh']
<<<<<<< HEAD
        data = make_data(commands, True, str(self.uuid))
=======
        data = make_data(commands, True, environment=str(self.uuid))
>>>>>>> d07a0d4dce2487d07f78038a167d19a58642fe62
        url = os.path.join(self.sandbox, "execute/")
        try:
            response = requests.post(url, data=data, files=files, timeout=request_timeout)
            response = json.loads(response.text)
            response["id"] = response["environment"]
            command = response['execution'][1]
            response["grade"] = command["stdout"] if not command["exit_code"] else -1
<<<<<<< HEAD
            response["stderr"] = command["stderr"]
            print("RESPONSE = ", response)
            del response['execution']
            if (requests.head(os.path.join(
                    self.sandbox,
                    "files/%s/feedback.html/") % str(response['environment']))):
                feedback = requests.get(os.path.join(
                    self.sandbox,
                    "files/%s/feedback.html/") % str(response['environment']))
                response["feedback"] = feedback.text
            if (requests.head(os.path.join(
                    self.sandbox,
                    "files/%s/processed.json/") % str(response['environment']))):
                processed = requests.get(os.path.join(
                    self.sandbox,
                    "files/%s/processed.json/") % str(response['environment']))
                response["context"] = json.loads(processed.text)
=======
            stderr = get_file_from_env(requests, self.sandbox, "stderr.log", response["id"])
            if stderr is not None:
                response["stderr"] = stderr
            print("\nSTDERR :\n", response["stderr"], "\n")
>>>>>>> d07a0d4dce2487d07f78038a167d19a58642fe62
            response["sandboxerr"] = get_sandboxerr_eval(response["status"], request_timeout)
            feedback = get_file_from_env(requests, self.sandbox, "feedback.html", response["id"])
            if feedback is not None:
                response["feedback"] = feedback
            context = get_file_from_env(requests, self.sandbox, "processed.json", response["id"])
            if context is not None:
                response["context"] = json.loads(context)
            del response["environment"]
            del response['execution']
        except json.decoder.JSONDecodeError:  # pragma: no cover
            msg = "Sandbox '" + url + "' returned a non JSON response\n"
            logger.critical(msg)
            raise SandboxUnavailable(msg)
        except Exception:
            msg = "Could not join the sandbox '" + url + "'."
            logger.exception(msg)
            raise SandboxUnavailable(msg)
        return response
