import re, pytz
from datetime import datetime, timedelta
from math import log

from django.conf import settings


EPOCH = pytz.timezone(settings.TIME_ZONE).localize(datetime(1970, 1, 1))



def epoch_seconds(date):
    td = date - EPOCH
    return td.days * 86400 + td.seconds + (float(td.microseconds) / 1000000)


def parse_query(query):
    """Parse the given query, returning a tuple of strings list (include, exclude)."""
    exclude = re.compile(r'(?<=-")[^"]+?(?=")|(?<=-)\w+').findall(query)
    for w in exclude:
        query = query.replace(w, '')
    query = " " + query
    return re.compile(r'(?<=[+ ]")[^"]+?(?=")|(?<=[+ ])\w+').findall(query), exclude
