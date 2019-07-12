# encoding: utf-8

from django.utils import timezone



def applyPlurialOrNot(number, shapeWord):
    """Take  an amount and an english word at singular and applies it at plural if necessary,
     return this as a string, it doesn't work with irregular words"""
    if number > 1:
        if shapeWord.endswith("f") or shapeWord.endswith("fe") and not shapeWord.endswith("ff"):
            if shapeWord.endswith("f"):
                shapeWord = shapeWord[:-1] + "ves"
            else:
                shapeWord = shapeWord[:-2] + "ves"
        elif shapeWord.endswith("y") and not shapeWord.endswith("ey") and not shapeWord.endswith(
            "ay") and not shapeWord.endswith("oy") and not shapeWord.endswith("uy"):
            shapeWord = shapeWord[:-1] + "ies"
        elif shapeWord.endswith("s") or shapeWord.endswith("x") or shapeWord.endswith(
            "sh") and shapeWord.endswith("or") and shapeWord.endswith("ch"):
            if shapeWord.endswith("s") or shapeWord.endswith("x"):
                shapeWord = shapeWord[:-1] + "es"
            else:
                shapeWord = shapeWord[:-2] + "es"
        else:
            shapeWord += "s"
        
        if shapeWord[-1] == 'y':
            shapeWord = shapeWord + 'ies'
    
    return str(number) + " " + shapeWord



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
        months = delta.days // 30
        years = months // 365
        centuries = years // 100
        millenniums = centuries // 10
        if millenniums == 0:
            if centuries == 0:
                if years == 0:
                    if months == 0:
                        if delta.days == 0:
                            if hours == 0:
                                if minutes == 0:
                                    if seconds >= 5:
                                        return str(seconds) + " seconds ago"
                                    return " just now"
                                else:
                                    return applyPlurialOrNot(minutes, "minute") + " ago"
                            else:
                                return applyPlurialOrNot(hours, "hour") + " ago"
                        else:
                            return applyPlurialOrNot(delta.days, "day") + " ago"
                    else:
                        return applyPlurialOrNot(months, "month") + " ago"
                else:
                    return applyPlurialOrNot(years, "year") + " ago"
            else:
                return applyPlurialOrNot(centuries, "century") + " ago"
        else:
            return applyPlurialOrNot(millenniums, "millennium") + " ago"
    
    
    def pub_date_verbose(self):
        return DateMixin.verbose_date(self.pub_date)
    
    
    def update_date_verbose(self):
        return DateMixin.verbose_date(self.update_date)
