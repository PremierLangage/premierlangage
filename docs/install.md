# Installation

If any problem occurs during the installation, see the section ***Troubleshooting***.

## Requirements

- python >= 3.5
- pip3
- zip

### Python

We recommend you to use a [python virtual environment](https://docs.python.org/3/tutorial/venv.html) to make a clean install and to be 
sure that PL's packages will not conflict with your already installed packages.

You can install virtualenv with:

    apt-get install python3-virtualenv python3-venv

Then simply use:

    python3 -m venv [env_name]

to create your environment. You can now run your environment with:

    source [env_name]/bin/activate

To stop it, use:

    deactivate

You can see that your environment is running if its name appear at the start of your prompt:

    (env_name) user@debian~$:

Every module installed with pip while running a python environment will be installed on said environment.

## Local/Dev

- run `install_local.sh`
- Create a super user for the server by entering informations when prompted
- Run the server: `python3 manage.py runserver`

## Deployment

- run `install_release.sh`
- Create a super user for the server by entering informations when prompted
- You should override settings (like SECRET_KEY, SANDBOX or ALLOWED_HOSTS), by creating a file `premierlangage/server/serverpl/serverpl/config.py` and declaring such settings.
- From `premierlangage/server/serverpl/`, run `python3 manage.py collectstatic`

## Sandbox

To execute exercises, you will also need to set up a sandbox, you can find one [here](https://github.com/plgitlogin/sandbox),
and set the settings `SANDBOX` to the corresponding url (I.E. `http://127.0.0.1:7000/sandbox`).

### Logging

Default facility used for syslog is local7.
To enable logging on a custom log file, you should created a new file ending by .conf in '/etc/rsyslog.d/' containing:

```
local7.*	/var/log/django.log # 'replace django.log with whatever you want'
$EscapeControlCharactersOnReceive off
& stop
```

And restart syslog and rsyslog services

Configure mails option in `premierlangage/server/serverpl/serverpl/config.py` to enable the logger to send mail.

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

### If you still have any problem, do not hesitate to contact one of the project member
