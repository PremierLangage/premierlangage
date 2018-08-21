from wimsdb import wimsdb
from loader.models import PL
from loader.parser import parse_file
from filebrowser.models import Directory
import requests, re
from django.conf import settings


def wimsdb(path):

    response = requests.get(settings.WIMS_MODULE_URL + path, verify=False)
    list_exo = re.findall(r'\<td\>\<a href=\"(?P<exoname>.*?\.def)"\>', response.text)

    list_dir = re.findall(r'\<td\>\<a href=\"(?P<dirname>.*?/)\"\>', response.text)
    for dir in list_dir:
        if dir != '/' and dir != '/'+path :
            wimsdb(path + dir)
    for exo in list_exo:
        exo_content = requests.get(settings.WIMS_MODULE_URL + path + exo, verify=False)
        TITLE = re.compile(r'\!set title=(?P<title>.*?\n)')
        match = TITLE.match(exo_content.text)
        title = None if not match else match.group('title')
        if not title :
            raise Exception("Excercice wims with no title " + path + exo)
        wims = path.split('/')
        
        #dic = {'type':'wims',
        #       'level':wims[1],
        #       'subject':wims[2],
        #       'notion':wims[3].split('.')[0].replace('oef',''),
        #       '_format':'.pl',
        #       'title':title,
        #       'content':exo_content.text,
        #       'ident':settings.WIMS_IDENT,
        #       'quser':settings.WIMS_QUSER,
        #       'passwd':settings.WIMS_PASSWD,
        #       'course':settings.WIMS_COURSE,
        #       'url':'',
        #       '__extends':[{
      	#					"path":"demo/wims/template",
      	#					"directory_name":"plbank",
      	#					"line":"extends=template.pl",
      	#					"lineno":1,
        #                   }],
        #      }
        #template_dic, warnings = parse_file(Directory.objects.get(name='plbank'), "demo/wims/template.pl",True)
        #for key,value in template_dic.items():
        #    if not key in dic:
        #        dic[key] = value
        #pl = PL(name=exo, json=dic, directory= Directory.objects.get(name='plbank'), rel_path=path + exo).save()

wimsdb('modules/')
