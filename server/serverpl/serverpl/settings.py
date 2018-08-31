DEPLOYED = False

import os
import dj_database_url
from django.contrib.messages import constants as messages


if DEPLOYED:
    try:
        import serverpl.config as conf
    except ImportError:
        raise ImportError("ImportError: No module named 'serverpl.config' found.\n"
                        + "File premierlangage/server/serverpl/conf.py was not found.\n"
                        + "You can find an example of such file at premierlangage/server/serverpl/conf_example.py")


# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = "o!m$n&s4=kcftm1de1m+7!36a=8x38w4" if not DEPLOYED else conf.SECRET_KEY


# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = not DEPLOYED

# List of Allowed Hosts
ALLOWED_HOSTS = ['127.0.0.1', 'pl-test.u-pem.fr'] if not DEPLOYED else conf.ALLOWED_HOSTS


# Used by mail_admins log handler, 
# set ENABLE_MAIL_ADMINS to True to use it (DEBUG should also be set to False)
ENABLE_MAIL_ADMINS = True
MAIL_HOST = 'smtp.u-pem.fr'
MAIL_PORT = 25
SERVER_EMAIL = 'pl@pl-test.u-pem.fr'
ADMINS = [
    ('Coumes Quentin', 'qcoumes@etud.u-pem.fr'),
] if not DEPLOYED else conf.ADMINS
if DEBUG or not ENABLE_MAIL_ADMINS: # Write email in console instead of sending it
    EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'



# Application definition
INSTALLED_APPS = [
    'filebrowser',
    'playexo',
    'user_profile',
    'loader',
    'classmanagement',
    'sandbox',
    'documentation',
    'markdown_deux',
    'wims',
    #~ 'qa',
    'taggit',
    'hitcount',
    'django_markdown',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django_auth_lti',
]

# Middleware definition
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django_auth_lti.middleware_patched.MultiLTILaunchAuthMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]


#Cookies settings
SESSION_SAVE_EVERY_REQUEST = True
SESSION_COOKIE_AGE = 157680000  # 5 years


# Redirect when not authenticated to
LOGIN_URL = "/playexo/not_authenticated/"


# URLs module
ROOT_URLCONF = 'serverpl.urls'


#Overriding messages.ERROR to 'danger' to correspond with the bootstrap alert class
MESSAGE_TAGS = {
    messages.ERROR: 'danger',
}


# Templates engines
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'django.template.context_processors.request',
            ],
        },
        
    },

]


# WSGI Module
WSGI_APPLICATION = 'serverpl.wsgi.application'


# Database
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
} if not DEPLOYED else conf.DATABASES
#~ db_from_env = dj_database_url.config(conn_max_age=500)
#~ DATABASES['default'].update(db_from_env)


# Authentification
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend',
    'django_auth_lti.backends.LTIAuthBackend',
)

LTI_OAUTH_CREDENTIALS = {
    'moodle': 'secret',
} if not DEPLOYED else conf.LTI_OAUTH_CREDENTIALS


#Logger information
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
} if not DEPLOYED else conf.LOGGING


# Internationalization
LANGUAGE_CODE = 'fr-FR'
TIME_ZONE = 'Europe/Paris'
USE_I18N = False
USE_L10N = True
USE_TZ = True


# Static files (CSS, JavaScript, Images)
STATIC_ROOT = os.path.abspath(os.path.join(BASE_DIR, 'serverpl/static'))
STATIC_URL = '/static/'

MEDIA_ROOT = os.path.abspath(os.path.join(BASE_DIR, '../../tmp'))
if not os.path.isdir(MEDIA_ROOT):
    os.makedirs(MEDIA_ROOT)
MEDIA_URL = '/tmp/'


# Default Filebrowser's path
FILEBROWSER_ROOT = os.path.abspath(os.path.join(BASE_DIR, '../../repo/'))


# Path to directory containing parsers
PARSERS_ROOT = os.path.abspath(os.path.join(BASE_DIR,'loader/parsers/'))
PARSERS_MODULE = 'loader.parsers'


# Wims modules URL
WIMS_MODULE_URL = "https://wims-preprod.u-pem.fr/"
WIMS_IDENT='pltest'
WIMS_QUSER='qcoumes'
WIMS_PASSWD='toto'
WIMS_COURSE='8109815'
