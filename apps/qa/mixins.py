# encoding: utf-8

import datetime

from django.utils import timezone



class DateMixin:
    """Provide a method indicating how much time ago something was created according to pub_date
    field."""
    
    
    @staticmethod
    def verbose_date(date):
        now = timezone.now()
        delta = now - date
        seconds = delta.seconds
        minutes = seconds // 60
        hours = minutes // 60
        if delta.days == 0:
            if hours == 0:
                if minutes == 0:
                    if seconds >= 1:
                        return str(seconds) + " seconds ago"
                    return "just now"
                else:
                    return str(minutes) + " minutes ago"
            else:
                return str(hours) + " hours ago"
        if delta.days < 30:
            return str(delta.days) + " days ago"
        return str(datetime.datetime.strftime(date, "%Y/%m/%d"))
    
    
    def pub_date_verbose(self):
        return DateMixin.verbose_date(self.pub_date)
    
    
    def update_date_verbose(self):
        return DateMixin.verbose_date(self.update_date)
