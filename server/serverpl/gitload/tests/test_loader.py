
from gitload.loader import loadPLTP
from gitload.models import Repository

import pytest, hashlib



@pytest.mark.django_db
def test_loadPLTP(plbank_present):
    assert plbank_present
    
    r = Repository(name="plbank", url="elsewhere", version=1)
    pltp, warning = loadPLTP("python/0PLG/plgrader.pltp", r, force=True)
    print(warning)
    assert pltp != None
    
    hasher = hashlib.sha1()
    hasher.update(('python/0PLG/plgrader.pltp'+'plbank').encode('utf-8'))
    
    assert pltp.rel_path == "python/0PLG/plgrader.pltp"
    assert pltp.name == "plgrader"
    assert pltp.sha1 == hasher.hexdigest()
