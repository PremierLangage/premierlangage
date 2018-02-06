# Local/Dev

### Requirements:

- python >= 3.5
- pip3

### Installation


- install a virtual environement with the following :

  cd ~
  python -m venv  nameofvirtual
  source ~/nameofvirtual/bin/activate 

Return in the where you clone the project

- Run the installation script :

  server/serverpl/install_local.sh

- Create a super user for the server by entering informations when prompted

- create directories *premierlangage/../tmp* and *premierlangage/../log*

  mkdir  premierlangage/../tmp premierlangage/../log

- Run the server (*python manage.py runserver*)

  cd server/serverpl/
  ./run
 
 On the server with a browser http://127.0.0.1:8000:
-  Go to Administration -> Users -> [Your Super User] -> Scroll down to *Role* -> Add **AD** Role -> Save
-  Go to Administration -> Sandbox -> Create a new sandbox with url: "http://127.0.0.1:8000/sandbox/?action=execute", use any name you want, and priority don't matter in the local case.



# Deployment

### Requirements:

- python >= 3.5
- pip3

### Installation

- Run server/serverpl/install_release.sh
- Create a super user for the server by entering informations when prompted
- create directory *premierlangage/../log*
- Run the server (*python manage.py runserver*)
- Go to Administration -> Users -> [Your Super User] -> Scroll down to *Role* -> Add **AD** Role -> Save
- Add a least one valid Sandbox with a corresponding priority (0 - 2147483647, the **smallest** number have the **highest** piority), a sandbox is available [here](https://git-etud.u-pem.fr/pl-sandbox.git)



# Logging
Default facility used for syslog is local7.
To enable logging on a custom log file, you should created a new file ending by .conf in '/etc/rsyslog.d/' containing:

  local7.*	/var/log/django.log # 'replace django.log with whatever you want'
  $EscapeControlCharactersOnReceive off
  & stop

And restart syslog and rsyslog services

Configure mails option in settings.py to enable the logger to sent mail.
