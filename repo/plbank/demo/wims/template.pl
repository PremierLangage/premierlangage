before==
import re
import urllib
import requests
from wimsapi import WimsAPI
from json.decoder import JSONDecodeError
from urllib import parse
params=''
wims = WimsAPI("https://wims.u-pem.fr/wims.cgi","pltest","toto")
nbsheet = 1
sheet = wims.listsheets(8109815,"myclass")[1]['nbsheet']
present = False
if int(sheet) != 0 :
    nbsheet = int(sheet)
else :
     wims.addsheet(8109815,"myclass",{})
listexo = wims.getsheet(8109815,"myclass",nbsheet,['exolist'])[1]['exolist']
if len(listexo) == 64 :
    nbsheet = nbsheet + 1
    
if 'url' in locals():
    if not wims.checksheet(8109815,"myclass",int(sheet))[0]:
            wims.addsheet(8109815,"myclass",{})
    parsed=parse.parse_qs(parse.urlparse(url).query)
    for k in parsed :
        if ' ' in k:
            parsed[k.replace(' ','')]= parsed[k]
            del parsed[k]
    if 'module' in parsed:
        module = parsed['module'][0]
        parsed.pop('module')
    elif 'emod' in parsed:
        module = parsed['emod'][0]
        parsed.pop('emod')
    else :
        raise ValueError("No module in url")
    if 'session' in parsed:
        parsed.pop('session')
    for k,v in parsed.items() :
        params = params + '&' + k + '=' +v[0]
    if module == 'classes/fr':
        raise ValueError("This 'url' is a local class's url.")
    for i in range(1,int(sheet)+1) :
        listexo = wims.getsheet(8109815,"myclass",str(i),['exolist'])[1]['exolist']
        for exo in listexo:
            if exo['title'] == module and exo['module'] == module and exo['params'] == params :
                url = 'https://wims.u-pem.fr/wims.cgi?module=adm/raw&job=lightpopup&emod='+module+'&parm=cmd=new'+params.replace('&',';')+';exo='+module+'&option=noabout&worksheet='+ str(i)    
                present = True 
    if not present :
        sheetstatus = wims.modsheet(8109815,"myclass",nbsheet,{'status':'0'})
        exosheet = wims.putexo(8109815,"myclass",str(nbsheet),module,{'params':params,'title':module})
        url = 'https://wims.u-pem.fr/wims.cgi?module=adm/raw&job=lightpopup&emod='+module+'&parm=cmd=new'+params.replace('&',';')+';exo='+module+'&option=noabout&worksheet='+str(nbsheet)
    sheetstatus = wims.modsheet(8109815,"myclass",nbsheet,{'status':'1'})
elif 'oef' in locals():
    if 'nameoef' not in locals():
        raise ValueError("Variable 'nameoef' should be declared in the PL")
    else :
        if not wims.checksheet(8109815,"myclass",nbsheet)[0]:
            wims.addsheet(8109815,"myclass",{})
        module ='classes/fr'
        exo = wims.addexo(8109815,"myclass",nameoef, oef)
        if exo[1]['message'] == nameoef+' already exists !':
            delexo = wims.delexo(8109815,"myclass",nameoef)
            exo = wims.addexo(8109815,"myclass",nameoef, oef)
        else :
            sheetstatus = wims.modsheet(8109815,"myclass",nbsheet,{'status':'0'})
            exosheet = wims.putexo(8109815,"myclass",str(nbsheet),module,{'params':'exo='+nameoef,'title':nameoef})
        sheetstatus = wims.modsheet(8109815,"myclass",nbsheet,{'status':'1'})
        url = 'https://wims.u-pem.fr/wims.cgi?module=adm/raw&job=lightpopup&emod='+module+'&parm=cmd=new;exo='+nameoef+'&option=noabout'

elif 'nameoef' in locals():
        if nameoef in file__:
            if not wims.checksheet(8109815,"myclass",nbsheet)[0]:
                wims.addsheet(8109815,"myclass",{})
            module ='classes/fr'
            exo = wims.addexo(8109815,"myclass",nameoef,file__[nameoef])
            if exo[1]['message'] == nameoef+' already exists !':
                delexo = wims.delexo(8109815,"myclass",nameoef)
                exo = wims.addexo(8109815,"myclass",nameoef,file__[nameoef])
            else:
                sheetstatus = wims.modsheet(8109815,"myclass",nbsheet,{'status':'0'})
                exosheet = wims.putexo(8109815,"myclass",str(nbsheet),module,{'params':'exo='+nameoef,'title':nameoef})
            sheetstatus = wims.modsheet(8109815,"myclass",nbsheet,{'status':'1'})
            url = 'https://wims.u-pem.fr/wims.cgi?module=adm/raw&job=lightpopup&emod='+module+'&parm=cmd=new;exo='+nameoef+'&option=noabout'
        else :
            raise ValueError("No OEF file")
else :
    raise ValueError("Variable 'url or oef or nameoef' should be declared in the PL")
    
#del1 = wims.cleanclass(8109815,"myclass")
add = wims.adduser(8109815,"myclass",user__.username, {'firstname':user__.username,'lastname':user__.username,'password':'toto'})
user = wims.authuser(8109815,"myclass",user__.username)
log = wims.getlog(8109815,"myclass",user__.username)
url= re.sub (r'session=(?P<session>.*?)(&|\n)','',url)
==

form==
{{delexo}}
{{exo}}
{{url}}
<iframe width="100%" height="600" src="{{url}}&session={{user.1.wims_session}}"></iframe>
==

buttons==
==



