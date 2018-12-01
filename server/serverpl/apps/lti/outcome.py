import logging
from xml.etree import ElementTree

import requests

from lti.models import ActivityOutcome


logger = logging.getLogger(__name__)


def send_activity_grade(user, activity, grade):
    try:
        outcome = ActivityOutcome.objects.get(user=user, activity=activity)
    except Exception:
        logger.exception("Could not get ActivityOutcome for user '%s' and activity '%s'"
                         % (user.username, str(activity)))
        return False

    with open("ressources/result.xml") as f:
        content = f.read() % (outcome.sourcedid, grade)

    response = requests.post(outcome.url, content)
    tree = ElementTree.parse(response.text)
    root = tree.getroot()
    if 200 <= response.status_code < 300 and root[0][0][2][0].text == "succes":
        return True
    else:
        logger.error("Consumer sent an error response after sending grade for user '%s' and "
                     "activity '%s'" % (user.username, str(activity)))
        return False
