from pysrc.plcheck import checkplfile, checkpltpfile, find_bank, main
import os, pytest


@pytest.mark.django_db
def test_checkplfile_succeed():
    assert(checkplfile("/python/0PLG/TPE/identificateurs.pl", 'plbank', sandboxurl = "http://127.0.0.1:8000/sandbox/?action=execute"))
    
@pytest.mark.django_db
def test_checkplfile_otherbank_succeed():
    assert(checkplfile("identificateurs.pl", 'otherbank', sandboxurl = "http://127.0.0.1:8000/sandbox/?action=execute"))

@pytest.mark.django_db
def test_checkplfile_direct_succeed():
    assert(checkplfile("/gift/all/SelectWithFeedback.pl", 'plbank', sandboxurl = "http://127.0.0.1:8000/sandbox/?action=execute"))

@pytest.mark.django_db
def test_checkplfile_direct_wrong_evaluator():
    assert not (checkplfile("/test/wrong_evaluator.pl", 'plbank', sandboxurl = "http://127.0.0.1:8000/sandbox/?action=execute"))

@pytest.mark.django_db
def test_checkplfile_direct_always_false_evaluator():
    assert not (checkplfile("/test/false_evaluator.pl", 'plbank', sandboxurl = "http://127.0.0.1:8000/sandbox/?action=execute"))
    
@pytest.mark.django_db
def test_checkplfile_direct_always_true_evaluator():
    assert not (checkplfile("/test/true_evaluator.pl", 'plbank', sandboxurl = "http://127.0.0.1:8000/sandbox/?action=execute"))
    
    
@pytest.mark.django_db
def test_checkplfile_direct_except_evaluator():
    assert not (checkplfile("/test/except_evaluator.pl", 'plbank', sandboxurl = "http://127.0.0.1:8000/sandbox/?action=execute"))

@pytest.mark.django_db
def test_checkplfile_direct_create_bad_responses():
    assert not (checkplfile("/test/create_bad_responses.pl", 'plbank', sandboxurl = "http://127.0.0.1:8000/sandbox/?action=execute"))
    
@pytest.mark.django_db
def test_checkplfile_unconsistent_pl():
    assert not (checkplfile("/test/unconsistent.pl", 'plbank', sandboxurl = "http://127.0.0.1:8000/sandbox/?action=execute"))
    
    
@pytest.mark.django_db
def test_checkplfile_no_dicfromfile():
    assert not (checkplfile("zigoto.pl", 'plbank', sandboxurl = "http://127.0.0.1:8000/sandbox/?action=execute"))

@pytest.mark.django_db
def test_checkpltpfile_succeed():
    os.chdir(str(os.path.dirname(__file__))+'/../../../../repo/plbank')
    assert (checkpltpfile("/python/0PLG/bjr.pltp", 'plbank', sandboxurl = "http://127.0.0.1:8000/sandbox/?action=execute"))
    
@pytest.mark.django_db
def test_checkpltpfile_direct_succeed():
    os.chdir(str(os.path.dirname(__file__))+'/../../../../repo/plbank')
    assert (checkpltpfile("/gift/all/all.pltp", 'plbank', sandboxurl = "http://127.0.0.1:8000/sandbox/?action=execute"))

@pytest.mark.django_db
def test_checkpltpfile_missingkey():
    os.chdir(str(os.path.dirname(__file__))+'/../../../../repo/plbank')
    assert not (checkpltpfile("/python/0PLG/missingkey.pltp", 'plbank', sandboxurl = "http://127.0.0.1:8000/sandbox/?action=execute"))

@pytest.mark.django_db
def test_findbank_pltp():
    assert('plbank' == find_bank("/python/test/alwayscorrect.pltp"))

@pytest.mark.django_db
def test_main_pltp_succeed():
    os.chdir(str(os.path.dirname(__file__))+'/../../../../repo/plbank')
    assert main("/python/0PLG/bjr.pltp", sandboxurl = "http://127.0.0.1:8000/sandbox/?action=execute")
    
@pytest.mark.django_db
def test_main_pltp_failed():
    os.chdir(str(os.path.dirname(__file__))+'/../../../../repo/plbank')
    assert not main("/python/0PLG/missingkey.pltp", sandboxurl = "http://127.0.0.1:8000/sandbox/?action=execute")

@pytest.mark.django_db
def test_main_colon_succeed():
    assert main("plbank:python/0PLG/TPE/identificateurs.pl", sandboxurl = "http://127.0.0.1:8000/sandbox/?action=execute")
    
@pytest.mark.django_db
def test_main_pl_succeed():
    assert main("python/0PLG/TPE/identificateurs.pl", sandboxurl = "http://127.0.0.1:8000/sandbox/?action=execute")
    
@pytest.mark.django_db
def test_main_failed():
    assert not main("bad_file", sandboxurl = "http://127.0.0.1:8000/sandbox/?action=execute")
    
@pytest.mark.django_db
def test_sandbox_failed():
    assert not main("python/0PLG/TPE/identificateurs.pl", sandboxurl = "fake_sandbox")

