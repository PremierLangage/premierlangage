# coding: utf-8

import logging, tempfile, tarfile, json, os, hashlib, requests, traceback

from serverpl.settings import DEBUG
from sandbox.models import Sandbox

logger = logging.getLogger(__name__)


def get_sandbox(url=None):
    """ Return the first available sandbox.
        Raise NotImplementedError if no sandbox could be found."""
    
    sandboxes = Sandbox.objects.all().order_by("priority")
    if not sandboxes:
        raise NotImplementedError("No sandbox has been added to the database. Add one througt Administration -> Sandbox -> New")
    
    if url:
        sandboxes = sandboxes.filter(url=url)
        if not sandboxes:
            raise NotImplementedError("No sandbox with the url '%s' found in the database" % url)
    tried = "Tried sandboxes:<br>"
    for sandbox in sandboxes:
        try:
            r = requests.head(sandbox.url + "?version=1.0.0", timeout=2)
            if 200 <= r.status_code <= 299:
                break
            tried += "- " + str(sandbox) + "(code received: " + str(r.status_code) + ")<br>"
        except Exception as e:
            if DEBUG:   
                tried += "- "+str(sandbox)+"<br>"+"DEBUG:<br>"+str(e)
            else:
                tried += "- "+str(sandbox)+"<br>"
            pass
    else:
        logger.warning("Couldn't join any sandbox of the database")
        raise NotImplementedError("Couldn't join any sandbox of the database.<br><br>"+str(tried))
    return sandbox


def tar_from_dic(files):
    with tempfile.TemporaryDirectory() as tmp_dir, tempfile.TemporaryDirectory() as env_dir:
        with tarfile.open(tmp_dir + "/environment.tgz", "w:gz") as tar:
            for key in files:
                with open(env_dir + "/" + key, "w") as f:
                    print(files[key], file=f)
                    
                tar.add(env_dir, arcname=os.path.sep)
            
        with open(tmp_dir + "/environment.tgz", 'rb') as tar:
                tar_stream = tar.read()
            
    return tar_stream


def sum_key_value(dic, *arg, value=lambda k:k):
    """ Returns a dict containing the sum of the value for each key of given dict.
        Does not modify given dicts.
        
        Value argument can be used to defined which member / index of a value must be added.
    """
    
    result = {}
    for d in [dic]+list(arg):
        for k, v in d.items():
            if k not in result:
                result.update({k: value(v)})
            else:
                result[k] += value(v)
    
    return result
