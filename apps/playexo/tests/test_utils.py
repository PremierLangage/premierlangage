import tarfile
import tempfile

from django.test import TestCase

from playexo.utils import render_feedback, tar_from_dic



class UtilsTestCase(TestCase):
    
    def test_tar_from_dic(self):
        file_dic = {
            "1.txt": "abc".encode(),
            "2.txt": "efg".encode()
        }
        with tempfile.TemporaryDirectory("w") as directory:
            with open(directory + "test.tgz", "wb") as f:
                f.write(tar_from_dic(file_dic))
            self.assertTrue(tarfile.is_tarfile(directory + "test.tgz"))
            with tarfile.open(directory + "test.tgz", "r:gz") as f:
                for i, file in enumerate(f):
                    ef = f.extractfile(file)
                    if ef is not None:
                        self.assertIn(ef.read()[:-1], file_dic[file.name])
    
    
    def test_render_feedback(self):
        self.assertIn("h1", render_feedback("# test"))
