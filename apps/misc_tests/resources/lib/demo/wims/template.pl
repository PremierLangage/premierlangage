before==
import requests
from json.decoder import JSONDecodeError
from urllib.parse import urlparse

for var in ['url', 'ident', 'quser', 'passwd', 'course']:
    if var not in locals():
        raise ValueError("Variable '"+var+"' should be declared in the PL")

host = urlparse(url)
if not host.scheme:
    raise ValueError("No protocol (http, https...) detected in the url '"+url+"'.")
host = host.scheme + '://' + host.netloc

url_session = host+"/wims/?module=adm/raw&job=authuser&ident=" + ident \
    + "&passwd=" + passwd \
    + "&code=ighfhg&qclass=" + course \
    + "&rclass=myclass&quser=" + quser
r = requests.get(url_session)

try:
    if "ERROR" in r.json()['status']:
        raise ValueError("Couldn't create a WIMS session : " + r.json()['message'])
    session = r.json()['wims_session']
except JSONDecodeError:
    raise ValueError("Response from '" + url_session
        + "' is not a valid json format. Received :\n\n" + r.content)
==

form==
<iframe width="100%" height="600" src="{{url}}&session={{session}}"></iframe>
==

buttons==
==
