import pytest, os, sys

from gitload.models import Repository



@pytest.fixture
@pytest.mark.django_db
def plbank_present():
    if not Repository.objects.filter(name="plbank"):
        print("Can't join the DB, or the Repository 'plbank' is missing.")
        return False
    return True

@pytest.fixture(scope='session')
def django_db_setup():
    """Avoid creating/setting up the test database"""
    pass


@pytest.fixture(scope="module")
def del_created_file_plgrader():
    yield
    
    #Teardown of test_plgrader
    print("Deleting file created by the tests:")
    for to_del in ["student.py", "soluce.py", "inputgenerator.py", "pl.json", "pltest.py"]:
        try:
            os.remove(to_del)
            print("\t"+to_del+" deleted...")
        except:
            print("\t"+to_del+" not found...")
