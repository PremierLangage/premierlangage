#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Python [3.6]
#
#  Author: Coumes Quentin     Mail: qcoumes@etud.u-pem.fr
#  Created: 2017-07-30
#  Last Modified: 2017-09-30


import json, os, tarfile, uuid, timeout_decorator, time, subprocess

from django.conf import settings

from sandbox.exceptions import MissingGradeError, GraderError



TIMEOUT_FEEDBACK = """
L'exécution de votre programme prends trop de temps (maximum {X} secondes).
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
            
            p = subprocess.Popen('python3 grader.py',stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
            out, err = p.communicate()
            
            return p.returncode, out if not p.returncode else err 
        finally:
            os.chdir(cwd)
    
    
    def execute(self):
        try:
            self._create_dir()
            cwd = os.getcwd()
            exit_code, output = self._evaluate()
            output = output.decode("UTF-8")
            if exit_code:
                if exit_code > 1000 or exit_code < 0:
                    raise GraderError("Grader exit code should be "
                            + "[0, 999] (received '"
                            + str(exit_code)+"').")
                response = {
                    'feedback': "Erreur lors de l'évaluation de votre "\
                        + "réponse, merci de contacter votre professeur.",
                    'error': output,
                    'grade': -exit_code,
                    'other': [],
                }
            
            else:
                output = json.loads(output)
                if not 'grade' in output and not 'success' in output:
                    raise MissingGradeError
                if 'success' in output:
                    output['grade'] = 100 if output['success'] else 0
                response = {
                    'feedback': ("No feedback provided by the grader"
                                 if 'feedback' not in output 
                                 else output['feedback']),
                    'error': "" if 'error' not in output else output['error'],
                    'other': [] if 'other' not in output else output['other'],
                    'grade': output['grade'],
                }
        
        except timeout_decorator.TimeoutError as e:
            response = {
                'feedback': TIMEOUT_FEEDBACK.replace('{X}', str(self.timeout)),
                'grade' : 0
            }
        
        except MissingGradeError as e:
            response = {
                'feedback': ("Erreur lors de l'évaluation de votre "
                    + "réponse, merci de contacter votre professeur."),
                'error': str(e),
                'grade': -3,
                'other': [],
            }
        
        except GraderError as e:
            response = {
                'feedback': ("Erreur lors de l'évaluation de votre "
                    + "réponse, merci de contacter votre professeur."),
                'error': str(e),
                'grade': -4,
                'other': [],
            }

        except Exception as e: #Unknown error
            response = {
                'feedback': ("Erreur lors de l'évaluation de votre "
                    + "réponse, merci de contacter votre professeur."),
                'error': traceback.format_exc(),
                'grade': -5,
                'other': [],
            }
            
            
        return json.dumps(response)
