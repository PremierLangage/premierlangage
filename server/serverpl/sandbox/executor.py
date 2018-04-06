#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Python [3.6]
#
#  Author: Coumes Quentin     Mail: qcoumes@etud.u-pem.fr
#  Created: 2017-07-30
#  Last Modified: 2017-09-30


import json, os, tarfile, uuid, timeout_decorator, time, subprocess

from django.conf import settings


TIMEOUT_FEEDBACK = """
L'éxecution de votre programme prends trop de temps (maximum {X} secondes).
<br><br>Cette erreur peut être dû:
<ul>
    <li>À une boucle infinie. Pensez à vérifier les conditions d'arrêts de vos boucles <strong>while</strong> ainsi que de vos fonctions récursives.</li>
    <li>À un algorithme trop gourmand. Certains algorithmes sont meilleurs que d'autres pour effectuer certaines actions.</li>
</ul>
"""



class Executor:
    
    def __init__(self, request):
        self.files = request.FILES
        self.dirname = os.path.join(settings.MEDIA_ROOT, str(uuid.uuid4()))
        self.timeout = float(request.POST["execution_timeout"])

    def _create_dir(self):
        """ Create the directory where the code will be executed"""
        
        if not 'environment.tgz' in self.files:
            raise KeyError('environment.tgz not found in request.files')
        os.mkdir(self.dirname)
        for filename in self.files:
            with open(self.dirname+"/"+filename, 'wb') as f:
                f.write(self.files[filename].read())
                
    
    @timeout_decorator.timeout(use_signals=False, use_class_attribute=True)
    def _evaluate(self):
        """ Untar environment.tar.gz and execute grader.py, returning the result. """
        try:
            cwd = os.getcwd()
            os.chdir(self.dirname)
            with tarfile.open(self.dirname+"/environment.tgz", 'r:gz') as tar:
                tar.extractall(self.dirname)
            result =  subprocess.check_output(['python3','grader.py'])
            os.chdir(cwd)
            return result
        except Exception as e:
            os.chdir(cwd)
            raise e
        
    def execute(self):
        """ 
            - If the evaluation suceeded, return a json of this dic:
                {
                    "platform_error": [],
                    "grade": {
                        "success": [True/False] according to the evaluation.
                        "feedback": [feedback]
                    }
                }
            - If the evaluation timed out, return a json of this dic:
                {
                    "platform_error": [],
                    "grade": {
                        "success": False,
                        "feedback": [Error message]
                    }
                }
            - If the evaluation failed, return a json of this dic:
                {
                    "platform_error": [list of errors],
                    "grade": {
                        "success": False,
                        "feedback": [Error message]
                    }
                }
        """
        
        try:
            self._create_dir()
            cwd = os.getcwd()
            result = self._evaluate()
            dico_response = {
                "platform_error": [],
                "grade": json.loads(result.decode("UTF-8")),
            }
            dico_response['path_files'] = self.dirname
        
        except timeout_decorator.TimeoutError as e: #Evaluation timed out
            os.chdir(cwd)
            error_message={
                'feedback': TIMEOUT_FEEDBACK.replace('{X}', str(self.timeout)),
                'success': False,
            }
            dico_response = {
                "platform_error": [str(e)],
                "grade":  error_message,
            }
        
        except Exception as e: #Unknown error
            error_message= {
                'feedback':"Erreur de la plateforme. Si le problème persiste, merci de contacter votre professeur.<br> "+str(type(e)).replace('<', '[').replace('>', ']')+": "+str(e),
                'success': "info",
            }
            if "result" in locals():
                error_message["feedback"] += "<br><br>"+result.decode('UTF-8').replace('\n', '<br>')
            dico_response = {
                "platform_error": [str(e)],
                "grade":  error_message,
            
            }
            
        return json.dumps(dico_response)
