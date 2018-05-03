# Installation

If any problem occurs during the installation, see the section ***Troubleshooting***.

## Requirements:
- python >= 3.5
- pip3
- zip
- rabbitmq-server

### Python
We recommend you to use [python virtual environment](https://docs.python.org/3/tutorial/venv.html) to make a clean install and to be 
sure that PL's packages will not conflict with your already installed packages.

You can install virtualenv by using:

    apt-get install python3-virtualenv python3-venv

Then simply use:

    python3 -m venv [env_name]

to create your environment. You can now run your environment with:

    source [env_name]/bin/activate
    
To stop it, use:

    deactivate

You can see that your environment is running if its name appear at the start of your prompt:

    (env_name) user@debian-laptop~$:

Every module installed with pip while running a python environment will be installed on said environment.


## Local/Dev
To use the project on localhost:

- Move to premierlangage/server/serverpl/ and run install_local.sh
- Create a super user for the server by entering informations when prompted
- Run the server (*python3 manage.py runserver*)
- Go to Administration -> Users -> ***Your Username*** -> Scroll down to *Role* -> Add **AD** Role -> Save
- Go to Administration -> Sandboxs -> Create a new sandbox with url: "http://127.0.0.1:8000/sandbox/?action=execute", the name you want, priority don't matter here.
- Go to Administration -> Directorys -> Add a new directory with name = 'plbank' and set owner to yourself

## Deployment
- Move to premierlangage/server/serverpl/ and run install_release.sh
- Create a super user for the server by entering informations when prompted
- Change important settings in server/serverpl/serverpl/settings.py (like SECRET_KEY)
- Run the server (*python3 manage.py collectstatic*)
- Run the server (*python3 manage.py runserver*)
- Go to Administration -> Users -> ***Your Username*** -> Scroll down to *Role* -> Add **AD** Role -> Save
- Add a least one valid Sandbox with a corresponding priority (0 - 2147483647, the **smallest** number have the **highest** piority), a sandbox is available [here](https://git-etud.u-pem.fr/pl-sandbox.git)
- Go to Administration -> Directorys -> Add a new directory with name = 'plbank' and set owner to yourself

### Logging
Default facility used for syslog is local7.
To enable logging on a custom log file, you should created a new file ending by .conf in '/etc/rsyslog.d/' containing:

  local7.*	/var/log/django.log # 'replace django.log with whatever you want'
  $EscapeControlCharactersOnReceive off
  & stop

And restart syslog and rsyslog services

Configure mails option in server/serverpl/serverpl/settings.py to enable the logger to sent mail.


## Troubleshooting

### Python environnement
When using

    python3 -m venv **env_name**

you can encounter a bug:

    Error: Command '['<directory>/bin/python3.5', '-Im', 'ensurepip', '--upgrade', '--default-pip']' returned non-zero exit status

To solve this problem, you can create an env without pip and install pip manually:

    python3 -m venv env --without-pip
    source env/bin/activate
    curl -w get https://bootstrap.pypa.io/get-pip.py | python3

You may need to restart the env to ensure pip is working properly:

    deactivate
    source env/bin/activate


### Creating / Migrating Database
If an error occurs during the creation or the migration of the database, you can run the script *premierlangage/server/serverpl/fix_database.sh*

**warning:** This script will empty your database (if it exists)


### If you still have any problem, do not hesitate to contact one of the project member.

