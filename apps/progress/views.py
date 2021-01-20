from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.shortcuts import render

from playexo.models import Answer


@login_required
def index(request):
    """Returns index page of personnal progression over PLaTon.
    """
    all_answer_user = Answer.objects.filter(user=request.user)
    max_grades_exo = {}
    nb_answer_user = 0
    nb_attempt = 0
    date_list = []
    for trace in all_answer_user:
        nb_answer_user += 1
        date_list.append(trace.date)
        if trace.grade :
            nb_attempt += 1
            if trace.pl not in max_grades_exo:
                max_grades_exo[trace.pl] = int(trace.grade)
            else:
                max_grades_exo[trace.pl] = max(int(trace.grade), max_grades_exo[trace.pl])
    all_days, ybegin, yend = this_year_calendar_activity(date_list)
    tags = {}
    for exo in max_grades_exo:
        if "tag" in exo.json:
            for tag in exo.json["tag"].split("|"):
                if tag not in tags:
                    tags[tag] = [max_grades_exo[exo]]
                else:
                    tags[tag].append(max_grades_exo[exo])
    tags_info = []
    for tag in tags:
        pts_tag = sum(tags[tag])
        mean_tag = sum(tags[tag]) / len(tags[tag]) if tags[tag] else 0
        tags_info.append( (tag, pts_tag, mean_tag) )
    tags_info.sort(key=lambda tag: tag[1], reverse=True)
                    
    sum_grades = 0
    for exo in max_grades_exo:
        sum_grades += max_grades_exo[exo]
    mean_grade = sum_grades / len(max_grades_exo) if max_grades_exo else 0
    mean_attempt = nb_attempt / len(max_grades_exo) if max_grades_exo else 0
            
    context = {'first_name' : request.user.first_name,
               'last_name' : request.user.last_name,
               'nb_answer_user' : nb_answer_user,
               'nb_touched_exos' : len(max_grades_exo),
               'total_point' : sum_grades,
               'mean_grade' : mean_grade,
               'nb_attempt' : nb_attempt,
               'mean_attempt' : mean_attempt,
               'tags_info' : tags_info,
               'all_days' : all_days,
               'ybegin': ybegin,
               'yend': yend,}
    return render(request, 'progress/index.html', context)


def this_year_calendar_activity(date_list):
    """Return a calandar of volume activity over the current
    educationnal year (from first of Spetember until last day of
    august).

    [ [(action, fraction, str(day)] ]

    """
    from datetime import date
    today = date.today()
    this_year = today.year
    this_month = today.month
    first_semester = [1, 2, 3, 4, 5, 6, 7, 8]
    last_semester = [9, 10, 11, 12]
    if this_month in first_semester:
        begin = this_year - 1
        end = this_year
    else:
        begin = this_year
        end = this_year + 1
    days_actions = {}
    # first september of the current education year
    fy, fw, fd = date(begin, 9, 1).isocalendar()
    all_days = [[(-1, -1, '')]*53 for i in range(7)]
    for dat in date_list:
        w, d = day_index_education(dat, fy, fw, fd)
        if w != -1 and d != -1:
            if all_days[d][w][0] == -1:
                all_days[d][w] = (1, 0, str(d).split(' ')[0])
            else:
                all_days[d][w] = (all_days[d][w][0]+1,
                                  all_days[d][w][1],
                                  all_days[d][w][2])
    max_action = 0
    for i in range(7):
        for j in range(53):
            if all_days[i][j][0] > max_action:
                max_action = all_days[i][j][0]
    acti = ["acti"+str(i) for i in range(10)]
    for i in range(7):
        for j in range(53):
            if all_days[i][j][0] != -1:
                all_days[i][j] = (all_days[i][j][0],
                                  acti[((all_days[i][j][0] - 1) * 10) // max_action],
                                  all_days[i][j][2])
            else:
                all_days[i][j] = (-1, "actino", '')
    return all_days, begin, end

def day_index_education(date, fy, fw, fd):
    r"""Return a tuple `(weekday, week)` where `weekday` is the day
    number of the date (0 for monday) and `week` is the number of the
    current week. Return `(-1, -1)` if the date is before the date of
    days `fd` of week number `fw` of year `fy`. The zero week is the
    week containing the first of september.

    EXEMPLES::

    >>> import datetime
    >>> d = datetime.datetime(2020, 9, 1)
    >>> d.isocalendar()
    (2020, 36, 2)
    >>> day_index_education(datetime.datetime(2021, 1, 1), 2020, 36, 2)
    (17, 4)
    >>> day_index_education(datetime.datetime(2020, 12, 31), 2020, 36, 2)
    (17, 3)
    """
    y, w, d = date.isocalendar()
    if y > fy:
        return (52 + w - fw - int(d == 0), d - 1 + (7*int(d == 0)) )
    if y == fy:
        if w >= fw:
            if d >= fd:
                return (w - fw - int(d == 0), d - 1 + (7*int(d == 0)) )
    return (-1, -1)
