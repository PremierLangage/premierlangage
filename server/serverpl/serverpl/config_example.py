import os
import dj_database_url


""" Configuration file example for deployement """


# Build paths inside the project like this: os.path.join(BASE_DIR, ...).
# Do not modify.
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Secret Key:
SECRET_KEY = "o!m$n&s4=kcftm1de1m+7!36a=8x38w4"


# List of Allowed Hosts
ALLOWED_HOSTS = ['127.0.0.1']


# Mails
ADMINS = [
    ('Coumes Quentin',      'qcoumes@etud.u-pem.fr'),
    #('Revuz Dominique',     'Dominique.Revuz@u-pem.fr'),
    #('Cuvelier Nicolas',    'ncuvelie@etud.u-pem.fr'),
]


# Authentification
LTI_OAUTH_CREDENTIALS = {
    'moodle': 'secret',
}


# Database
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}
DATABASES['default'].update(dj_database_url.config(conn_max_age=500))


# Logging
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    
    'filters': {
        'require_debug_false': {
            '()': 'django.utils.log.RequireDebugFalse',
        },
        'require_debug_true': {
            '()': 'django.utils.log.RequireDebugTrue',
        },
    },
    
    'formatters': {
        'verbose': {
            'format': '[%(asctime)-15s] %(levelname)s -- File: %(pathname)s line n°%(lineno) -- %(message)s',
            'datefmt': '%Y/%m/%d %H:%M:%S'
        },
        'simple': {
            'format': '[%(asctime)-15s] %(levelname)s -- %(message)s',
            'datefmt': '%Y/%m/%d %H:%M:%S'
        },
    },
    
    'handlers': {
        'console': {
            'level': 'DEBUG',
            'filters': ['require_debug_true'],
            'class': 'logging.StreamHandler',
            'formatter': 'simple'
        },
        'syslog': {
            'level': 'INFO',
            'class': 'logging.handlers.SysLogHandler',
            'facility': 'local7',
            'address': '/dev/log' if os.path.exists('/dev/log') else '/var/run/syslog',
            'formatter': 'verbose'
        },
        'mail_admins': {
            'level': 'ERROR',
            'class': 'django.utils.log.AdminEmailHandler',
            'include_html': True,
            'formatter': 'verbose'
        }
    },
    
    'loggers': {
        'django':{
            'handlers': ['console', 'syslog', 'mail_admins'],
            'level': 'INFO',
            'propagate': True,
        },
    },
}
