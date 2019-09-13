import hashlib
import logging
import os

import dj_database_url
from django.contrib.messages import constants as messages


# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
APP_DIRNAME = "apps"
SETTINGS_DIR = os.path.dirname(os.path.abspath(__file__))
BASE_DIR = os.path.dirname(SETTINGS_DIR)
APPS_DIR = os.path.realpath(os.path.join(BASE_DIR, APP_DIRNAME))

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = "o!m$n&s4=kcftm1de1m+7!36a=8x38wrr)m9)i@ru7j-*c7vgm"

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

# List of Allowed Hosts
ALLOWED_HOSTS = ['127.0.0.1']

# Used by mail_admins log handler,
# set ENABLE_MAIL_ADMINS to True to use it (DEBUG should also be set to False)
EMAIL_HOST = 'localhost'
EMAIL_PORT = 25
SERVER_EMAIL = 'root@localhost'
ADMINS = []
# Write email in console instead of sending it if DEBUG is True
if DEBUG:
    EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

# Application definition
PREREQ_APPS = [
    'taggit',
    'hitcount',
    'django_http_method',
    'django_markdown',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

PROJECT_APPS = [
    'filebrowser',
    'playexo',
    'user_profile',
    'loader',
    'lti_app',
    'qa',
    'editor',
    'components',
    'activity',
    'git',
]

INSTALLED_APPS = PROJECT_APPS + PREREQ_APPS

INSTALLED_APPS += ('django_jinja',)

# Middleware definition
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'lti_app.middleware.LTIAuthMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
]

# Cookies settings
SESSION_SAVE_EVERY_REQUEST = True
SESSION_COOKIE_AGE = 5 * 365 * 24 * 60 * 60

# Redirect when not authenticated to
LOGIN_URL = "/activity/login/"

# URLs module
ROOT_URLCONF = 'premierlangage.urls'

# Overriding messages.ERROR to 'danger' to correspond with the bootstrap alert class
MESSAGE_TAGS = {
    messages.ERROR: 'danger',
}

# Templates engines
TEMPLATES = [
    {
        'BACKEND':  'django_jinja.backend.Jinja2',
        'DIRS':     [
            os.path.join(BASE_DIR, 'templates')
        ],
        'APP_DIRS': True,
        'OPTIONS':  {
            "autoescape": True,
            "app_dirname": "templates",
            "auto_reload": DEBUG,
            "match_extension": ".html",
            "match_regex": r"^((?!(admin|registration)).)*$",
            "environment": "premierlangage.jinja2_custom.environment",
            "undefined": "premierlangage.jinja2_custom.CustomUndefined",
            "debug": True,
            "filters": {
                "markdown": "django_markdown.templatetags.django_markdown.markdown",
                "dict_value": "apps.playexo.templatetags.playexo_tags.dict_value",
            },
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
            "extensions": [
                "jinja2.ext.do",
                "jinja2.ext.loopcontrols",
                "jinja2.ext.with_",
                "jinja2.ext.i18n",
                "jinja2.ext.autoescape",
                "django_jinja.builtins.extensions.CsrfExtension",
                "django_jinja.builtins.extensions.CacheExtension",
                "django_jinja.builtins.extensions.TimezoneExtension",
                "django_jinja.builtins.extensions.UrlsExtension",
                "django_jinja.builtins.extensions.StaticFilesExtension",
                "django_jinja.builtins.extensions.DjangoFiltersExtension",
            ]
        },
    },
    {
        'BACKEND':  'django.template.backends.django.DjangoTemplates',
        'DIRS':     [
            os.path.join(BASE_DIR, 'templates')
        ],
        'APP_DIRS': True,
        'OPTIONS':  {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

# WSGI Module
WSGI_APPLICATION = 'premierlangage.wsgi.application'

# Database
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME':   os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

DATA_UPLOAD_MAX_MEMORY_SIZE = 134217728

# Update database configuration with $DATABASE_URL.
db_from_env = dj_database_url.config(conn_max_age=500)
DATABASES['default'].update(db_from_env)

# Password validation
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
    'lti_app.backends.LTIAuthBackend',
)

LTI_OAUTH_CREDENTIALS = {
    'moodle': 'secret',
}

LOGIN_REDIRECT_URL = '/'

# Logger information
LOGGING = {
    'version':                  1,
    'disable_existing_loggers': False,
    'filters':                  {
        'require_debug_false': {
            '()': 'django.utils.log.RequireDebugFalse',
        },
        'require_debug_true':  {
            '()': 'django.utils.log.RequireDebugTrue',
        },
    },
    'formatters':               {
        'verbose': {
            'format':  '[%(asctime)-15s] %(levelname)s -- '
                       'File: %(pathname)s line n°%(lineno)d -- %(message)s',
            'datefmt': '%Y/%m/%d %H:%M:%S'
        },
        'simple':  {
            'format':  '[%(asctime)-15s] %(levelname)s -- %(message)s',
            'datefmt': '%Y/%m/%d %H:%M:%S'
        },
    },
    'handlers':                 {
        'console':     {
            'level':     'DEBUG',
            'filters':   ['require_debug_true'],
            'class':     'logging.StreamHandler',
            'formatter': 'simple'
        },
        'mail_admins': {
            'level':        'ERROR',
            'class':        'django.utils.log.AdminEmailHandler',
            'include_html': True,
            'formatter':    'verbose'
        }
    },
    'loggers':                  {
        '': {
            'handlers': ['console', 'mail_admins'],
            'level':    'INFO',
        },
        'django.request': {
            'handlers': ['console', 'mail_admins'],
            'level':    'ERROR',
        },
    },
}

# Ask's settings
# Reputation contains the points awarded
# Right contains the points needed for doing action, -1 to disable (do not apply for the owner)
QA_SETTINGS = {
    'qa_messages':             True,
    'qa_description_optional': False,
    'reputation':              {
        'CREATE_QUESTION':          10,
        'CREATE_ANSWER':            20,
        'CREATE_ANSWER_COMMENT':    2,
        'CREATE_QUESTION_COMMENT':  2,
        'RECEIVE_QUESTION_COMMENT': 1,
        'RECEIVE_ANSWER_COMMENT':   1,
        'ANSWER_ACCEPTED':          20,  # Half for the acceptor
        'UPVOTE_QUESTION':          3,
        'UPVOTE_ANSWER':            3,
        'DOWNVOTE_QUESTION':        -3,
        'DOWNVOTE_ANSWER':          -3,
    },
    'right':                   {
        'POST_QUESTION':   0,
        'POST_ANSWER':     0,
        'POST_COMMENT':    0,
        'EDIT_QUESTION':   500,
        'EDIT_ANSWER':     500,
        'EDIT_COMMENT':    -1,
        'DELETE_QUESTION': 2000,
        'DELETE_ANSWER':   2000,
        'DELETE_COMMENT':  2000,
    },
}

# Hitcount settings
HITCOUNT_KEEP_HIT_ACTIVE = {'days': 1}

# Settings used for the creation of identicon (default avatar)
IDENTICON_SETTINGS = {
    'background':    'rgb(224,224,224)',
    'foreground':    [
        'rgb(45,79,255)',
        'rgb(254,180,44)',
        'rgb(226,121,234)',
        'rgb(30,179,253)',
        'rgb(232,77,65)',
        'rgb(49,203,115)',
    ],
    'row':           15,
    'col':           15,
    'padding':       (20, 20, 20, 20),
    'size':          (300, 300),
    'digest':        hashlib.sha1,
    'output_format': 'png',
}

# Internationalization
LANGUAGE_CODE = 'fr-FR'
TIME_ZONE = 'Europe/Paris'
USE_I18N = False
USE_L10N = True
USE_TZ = True

# Sandbox url:
SANDBOX = 'http://127.0.0.1:7000/sandbox'

# Static files (CSS, JavaScript, Images)
STATIC_ROOT = os.path.abspath(os.path.join(BASE_DIR, 'static'))
STATIC_URL = '/static/'
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "common_static"),
]

MEDIA_ROOT = os.path.abspath(os.path.join(BASE_DIR, 'media'))
MEDIA_URL = '/media/'

# Default Filebrowser's path
FILEBROWSER_ROOT = os.path.abspath(os.path.join(BASE_DIR, 'home/'))

# Filebrowser settings
FILEBROWSER_DISALLOWED_CHAR = ['/', ' ', '\t', '\n', ';', '#', '+', '&']

# Path to directory containing parsers
PARSERS_ROOT = os.path.abspath(os.path.join(APPS_DIR, 'loader/parsers/'))
PARSERS_MODULE = 'loader.parsers'

# Default home directory name for pl users
HOME = "Yggdrasil"

# Allow a file '[PL_ROOT]/server/premierlangage/premierlangage/config.py' to override any of the
# settings above.
try:
    from premierlangage.config import *
except Exception:
    if "VERBOSE" in os.environ:
        logger = logging.getLogger(__name__)
        logger.exception("No config file found.")
    pass
