

import plcheck
import plrequest
import pytest
import json

#FIXME can't test exceptions with pytest 
#def test_plcheck_basic_error1():
	#plcheck.main(plcheck.getrepodir(),"debug1.pl")
	#with raises(FileNotFoundError) :
		#s= plrequest.SanboxSession(q,"http://pl-sandbox-test.u-pem.fr/?action=execute")

@pytest.fixture
def localsandbox():
	import subprocess
	args=['python3','/Users/dr/DJANGO/nimdanor/django-docker-sandbox/dds/manage.py','runserver','127.0.0.1:9999']
	s = subprocess.Popen(args)
	yield s
	s.terminate()



def test_isruning(localsandbox):
	print(localsandbox)
	import time
	time.sleep(1)

def test_local9999_sandbox(localsandbox):
	answer =plcheck.checkplfile(plcheck.getrepodir(),"debug3.pl",sandboxurl="http://127.0.0.1:9999/sandbox/?action=execute",studentfile="print(7777)")	
	result = json.loads(answer)

	assert result["platform_error"]==[]
	assert 0


def Xtest_plcheck_basic2():
	answer =plcheck.checkplfile(plcheck.getrepodir(),"debug2.pl",sandboxurl="http://pl-sandbox-test.u-pem.fr/?action=execute",studentfile="print(4)")
	result = json.loads(answer)
	print(answer)
	assert result["platform_error"]==[]

