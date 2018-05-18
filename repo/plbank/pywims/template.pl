
before==
import requests
r = requests.get(host+"/wims/?module=adm/raw&job=authuser&ident=myself&passwd=toto&code=ighfhg&qclass="+course+"&rclass=myclass&quser=%20qcoumes")
session = r.json()['wims_session']
==

form==

<iframe width="100%" height="600" src="{{url}}&session={{session}}">
</iframe>
==







