
from gitload.loader import loadPLTP
from gitload.models import Repository

import pytest, hashlib


@pytest.fixture(scope="module")
def fixture_gitload():
    pass

@pytest.mark.usefixtures("fixture_gitload")
class test_gitload:
    
    @pytest.mark.django_db
    def test_loadPLTP(self):
        r = Repository(name="plbank", url="elsewhere", version=1)
        pltp = loadPLTP("python/0PLG/plgrader.pltp", r, force=True)
        
        assert pltp[0] != None
        
        hasher = hashlib.sha1()
        hasher.update(('plgrader'+r.name).encode('utf-8'))
        
        assert pltp[0].repository == r
        assert pltp[0].rel_path == "python/0PLG/plgrader.pltp"
        assert pltp[0].name == "plgrader"
        assert pltp[0].sha1 == hasher.hexdigest()
