import json
from django.shortcuts import get_object_or_404
from pysrc.plrequest import SandboxSession
from sandbox.models import Sandbox

def evaluator(reponse, dic):
    if 'timeout' in dic:
        sandbox_session = SandboxSession(dic, reponse['answer'], timeout=dic['timeout'])
    sandbox_session = SandboxSession(dic, reponse['answer'])

    try:
        feedback = json.loads(sandbox_session.call())
        if feedback['grade']['success'] == "info":
            return None, feedback['grade']['feedback']
        if feedback['grade']['success']:
            return True, feedback['grade']['feedback']
        return False, feedback['grade']['feedback']
    
    except ValueError as e :
        return None, "La réponse réçu part la sandbox n'est pas au bon format."+sandbox_session.call()
