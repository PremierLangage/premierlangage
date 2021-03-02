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
        commands = ['chmod +x builder.sh', './builder.sh']
        data = make_data(commands, True, )
        logger.info("Building on sandbox '" + self.sandbox + "'.")
        url = os.path.join(self.sandbox, "execute/")
        try:
            response = requests.post(url, data=data, files=files, timeout=request_timeout)
            response = json.loads(response.text)
            response["id"] = response["environment"]
            response['stderr'] = response['execution'][1]['stderr']
            response['sandboxerr'] = get_sandboxerr_build(response['status'], request_timeout)
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
                """tmp = self.dic
                tmp.update(response["context"])
                for key in response["context"]:
                    if "test" in key or "soluce" in key:
                        tmp[key] = response["context"][key]
                    if key == "before":
                        tmp["evaluator"] = response["context"][key] + "\n" + tmp["evaluator"]"""
                response2 = requests.post(url,
                                          data=make_data(
                                              ['rm pl.json', 'mv processed.json pl.json'],
                                              True,
                                              environment=response["environment"]
                                          ))
                response2 = json.loads(response2.text)
                response["id"] = response2["environment"]
            else:
                response['status'] = -1
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
        data = make_data(commands, True, environment=str(self.uuid))
        url = os.path.join(self.sandbox, "execute/")
        try:
            response = requests.post(url, data=data, files=files, timeout=request_timeout)
            response = json.loads(response.text)
            response["id"] = response["environment"]
            command = response['execution'][1]
            stderr = get_file_from_env(requests, self.sandbox, "stderr.log", response["id"])
            if stderr is not None:
                response["stderr"] = stderr
            response["sandboxerr"] = get_sandboxerr_eval(response["status"], request_timeout)
            feedback = get_file_from_env(requests, self.sandbox, "feedback.html", response["id"])
            if feedback is not None:
                if feedback == '\n':
                    feedback = ""
                response["feedback"] = feedback
            context = get_file_from_env(requests, self.sandbox, "processed.json", response["id"])
            if context is not None:
                response["context"] = json.loads(context)
            else:
                response["context"] = {}
            try:
                if not command["exit_code"]:
                    stdout = int(command["stdout"])
                    response["grade"] = stdout
                else:
                    response["grade"] = -1
            except ValueError:
                response["grade"] = -1
                response['status'] = -4
                response["feedback"] = "Sandbox error:" + response["sandboxerr"]

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
