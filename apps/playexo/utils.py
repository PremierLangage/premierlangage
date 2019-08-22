# coding: utf-8

import os
import tarfile
import tempfile

from django.template import Context, Template



def tar_from_dic(files):
    """Returns binaries of a tar gz file with the given file dictionnary
    Each entry of files is: "file_name": "file_content"
    """
    with tempfile.TemporaryDirectory() as tmp_dir, tempfile.TemporaryDirectory() as env_dir:
        with tarfile.open(tmp_dir + "/environment.tgz", "w:gz") as tar:
            for key in files:
                with open(os.path.join(env_dir, key), "wb") as f:
                    f.write(files[key])
            
            tar.add(env_dir, arcname=os.path.sep)
        
        with open(tmp_dir + "/environment.tgz", 'rb') as tar:
            tar_stream = tar.read()
    
    return tar_stream



def render_feedback(feedback):
    """Returns the given markdown string as an html string
    """
    return Template(
        "{% load django_markdown %}{% with fh=f|markdown %}{{fh|safe}}{% endwith %}"
    ).render(Context({'f': feedback}))
