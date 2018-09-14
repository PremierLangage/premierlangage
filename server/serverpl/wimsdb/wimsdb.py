from wimsdb import wimsdb
import os.path
from loader.models import PL
from loader.parser import parse_file
from filebrowser.models import Directory
import requests, re
from django.conf import settings



def wimsexodb(exo_content,path,exo,wims_path):
    wims = path.split('/')
    dic = {'type':'wims',
        'level':wims[1],
        'subject':wims[2],
        'notion':wims[3].split('.')[0].replace('oef',''),
        '_format':'.pl',
        'url':'https://wims.u-pem.fr/wims.cgi?lang=fr&cmd=new&module='+wims[1]+'/'+wims[2]+'/'+wims[3]+("" if not exo else '&exo='+exo.split('.')[0]),
        '__extends':[{
            "path":"demo/wims/template",
            "directory_name":"plbank",
            "line":"extends=template.pl",
            "lineno":1,
        }],
        }
    if exo_content:
        TITLE = re.compile(r'\!set title=(?P<title>.*?\n)')
        match = TITLE.match(exo_content.text)
        title = None if not match else match.group('title')
        if not title :
            dic['title']=wims_path[:-1].split('/')[-1]
        else :
            dic['title']=title
            dic['content']=exo_content.text
    else :
        dic['title']=(wims_path[:-1].split('/')[-1] if not exo else exo.split('.')[0])

    template_dic, warnings = parse_file(Directory.objects.get(name='plbank'), "demo/wims/template.pl",True)
    for key,value in template_dic.items():
        if not key in dic:
            dic[key] = value
    pl = PL(name=(exo.split('.')[0] if exo else wims_path[:-1].split('/')[-1]), json=dic, directory= Directory.objects.get(name='plbank'), rel_path=wims_path + ('' if not exo else exo)).save()


def wimsexopl(exo_content,path,exo,wims_path):
    f = open((wims_path[:-1]+".pl" if not exo else wims_path+exo.split('.')[0]+".pl"),'w')
    wims = path.split('/')
    if exo_content:
        TITLE = re.compile(r'\!set title=(?P<title>.*?\n)')
        match = TITLE.match(exo_content.text)
        title = None if not match else match.group('title')
        if not title :
            f.write('title='+wims_path[:-1].split('/')[-1]+'\n')
        else :
            f.write('title='+title+'\n')
    else :
        f.write('title='+(wims_path[:-1].split('/')[-1] if not exo else exo.split('.')[0])+'\n')
    f.write('type=wims\n')
    f.write('extends=plbank:/demo/wims/template.pl\n')
    f.write('level='+wims[1]+'\n')
    f.write('subject='+wims[2]+'\n')
    f.write('notion='+wims[3].split('.')[0].replace('oef','')+"\n")
    f.write('url=https://wims.u-pem.fr/wims.cgi?lang=fr&cmd=new&module='+wims[1]+'/'+wims[2]+'/'+wims[3]+('\n' if not exo else '&exo='+exo.split('.')[0]+'\n'))
    f.close()


def wimsdb(path,wims_path):
    response = requests.get(settings.WIMS_MODULE_URL + path, verify=False)
    if not response :
        return
    if 'def' in path:
        list_exo = re.findall(r'\<td\>\<a href=\"(?P<exoname>.*?\.def)"\>', response.text)
        for exo in list_exo:
            exo_content = requests.get(settings.WIMS_MODULE_URL + path + exo,verify=False)
            wimsexodb(exo_content,path,exo,wims_path)
            wimsexopl(exo_content,path,exo,wims_path)
        return
    else :
        list_dir = re.findall(r'\<td\>\<a href=\"(?P<dirname>.*?/)\"\>', response.text)
        for dir in list_dir:
            if dir != '/' and not 'modules' in dir :
                if len(dir.split('.')) > 1:
                    dir_content = requests.get(settings.WIMS_MODULE_URL + path + dir, verify=False)
                    if dir_content :
                        list_def = re.findall(r'\<td\>\<a href=\"(?P<dirname>.*?/)\"\>', dir_content.text)
                        if 'def/' in list_def:
                            if not os.path.isdir(wims_path+dir):
                                os.makedirs(wims_path+dir)
                            wimsexodb(None,path+dir,None,wims_path+dir)
                            wimsexopl(None,path+dir,None,wims_path+dir)
                            wimsdb(path + dir + 'def/',wims_path + dir)
                        else:
                            wimsexodb(None,path+dir,None,wims_path+dir)
                            wimsexopl(None,path+dir,None,wims_path+dir)

                else:
                    if not os.path.isdir(wims_path+dir):
                        os.makedirs(wims_path+dir)
                    wimsdb(path + dir, wims_path + dir)

try :
    wimsdb('modules/', '../../repo/wimsbank/')
except:
    pass
