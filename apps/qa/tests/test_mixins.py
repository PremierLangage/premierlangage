#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  test_model.py
#
#

from datetime import datetime

import mock
import pytz
from django.conf import settings
from django.test import TestCase

from qa.mixins import DateMixin


TZ = settings.TIME_ZONE



# This is the function that replaces django.utils.timezone.now()
def mocked_now():
    return pytz.timezone(TZ).localize(datetime(2000, 6, 1))



class MixinsTestCase(TestCase):
    
    @mock.patch('django.utils.timezone.now', side_effect=mocked_now)
    def test_datemixin(self, mocked):
        now = DateMixin()
        now.pub_date = pytz.timezone(TZ).localize(datetime(2000, 6, 1))
        
        secs = DateMixin()
        secs.pub_date = pytz.timezone(TZ).localize(datetime(2000, 5, 31, 23, 59, 57))
        
        minutes = DateMixin()
        minutes.pub_date = pytz.timezone(TZ).localize(datetime(2000, 5, 31, 23, 58, 59))
        
        hours = DateMixin()
        hours.pub_date = pytz.timezone(TZ).localize(datetime(2000, 5, 31, 22, 59, 59))
        
        days = DateMixin()
        days.pub_date = pytz.timezone(TZ).localize(datetime(2000, 5, 30, 23, 59, 59))
        
        date = DateMixin()
        date.pub_date = pytz.timezone(TZ).localize(datetime(2000, 3, 1))
        
        self.assertEqual(now.pub_date_verbose(), "just now")
        self.assertEqual(secs.pub_date_verbose(), "3 seconds ago")
        self.assertEqual(minutes.pub_date_verbose(), "1 minutes ago")
        self.assertEqual(hours.pub_date_verbose(), "1 hours ago")
        self.assertEqual(days.pub_date_verbose(), "1 days ago")
        self.assertEqual(date.pub_date_verbose(), "2000/03/01")
