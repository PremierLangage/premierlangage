# coding: utf-8

import tempfile, tarfile, os


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


def sum_key_value(dic, *arg, value=lambda k: k):
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
