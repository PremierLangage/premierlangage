# coding: utf-8
import json
import os
import tarfile
import tempfile
import uuid

from django.conf import settings
from django_jinja.backend import Jinja2
from typing import List, Dict


def tar_from_dic(files: Dict[str, str]):
    """Returns binaries of a tar gz file with the given file dictionnary
    Each entry of files is: "file_name": "file_content"
    """
    with tempfile.TemporaryDirectory() as tmp_dir, tempfile.TemporaryDirectory() as env_dir:
        env_uuid = uuid.uuid4()
        tar_name = tmp_dir + "/" + str(env_uuid) + ".tgz"
        with tarfile.open(tar_name, "w:gz") as tar:
            for key in files:
                with open(os.path.join(env_dir, key), "w") as f:
                    print(files[key], file=f)

            tar.add(env_dir, arcname=os.path.sep)

        with open(tar_name, 'rb') as tar:
            tar_stream = tar.read()

    return tar_stream


def make_data(list_commands: List[str], save: bool, environment=None, result_path=None):
    commands = {
        "commands": list_commands,
        "save": save,
        "environment": environment,
    }
    if result_path is not None:
        commands["result_path"] = result_path
    return {
        "config": json.dumps(commands),
    }


def get_file_from_env(requests, sandbox: str, file_name: str, env: str):
    if requests.head(
            os.path.join(
                sandbox,
                "files/%s/" + file_name + "/"
            ) % env):
        file = requests.get(os.path.join(
            sandbox,
            "files/%s/" + file_name + "/") % env)
        return file.text
    return None


def get_sandboxerr_build(status, timeout):
    if status == 0:
        return ""
    if status == -2:
        return "Execution of the script build/before timed out after " + \
               str(timeout) + " seconds."
    if status == -3:
        return "File 'processed.json' and 'pl.json' were not found in the environment " \
               "after the execution of the " \
               "build/before script. "
    return "An unknown error occured."


def get_sandboxerr_eval(status, timeout):
    if status == 0:
        return ""
    if status == -1:
        return "Execution of the evaluating script failed " \
               "due to an unkwown error. Please contact your teacher."
    if status == -2:
        return "Execution of the grader timed out after " + str(timeout) + \
               "seconds.\nThe RAM of the sandbox is currently limited to " + \
               settings.DOCKER_MEM_LIMIT + ", using more will considerably " \
                                           "slow the execution of \
               your grader.\nDo not forget to close every open file " \
                                           "or to use 'with' statement. "
    if status == -3:
        return "Result file was not found in the environment " \
               "after the execution of the " \
               "evaluating script. "
    if status == -4:
        return "The result file was not encoded in UTF-8. " \
                "Please contact your teacher."
    return "Execution of the evaluating script returned an invalid value. " \
           "Please contact your teacher."


def render_feedback(feedback):
    """Returns the given markdown string as an html string
    """
    env = Jinja2.get_default()
    return env.from_string(
        "{% with fh=f|markdown %}{{fh|safe}}{% endwith %}"
    ).render(context={'f': feedback})
