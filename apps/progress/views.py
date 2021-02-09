from django.contrib.auth.models import User
from django.core.exceptions import PermissionDenied
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, get_object_or_404

from activity.models import Activity
from playexo.models import Answer

from datetime import date


@login_required
def index(request):
    """Returns index page of personnal progression over PLaTon. By
    default, the index page is the progress page of requesting user.
    """
    return progress_user(request, request.user.pk)


def fill_grades_exo(all_answer_user, date_list, old_grades_exo, max_grades_exo):
    nb_answer_user = 0
    nb_attempt = 0
    fy, fw, fd = start_of_period().isocalendar()
    for trace in all_answer_user:
        nb_answer_user += 1
        date_list.append(trace.date)
        if trace.grade:
            nb_attempt += 1
            # if this happen before current educationnal year
            if day_index_education(trace.date, fy, fw, fd) == (-1, -1):
                if trace.pl not in old_grades_exo:
                    old_grades_exo[trace.pl] = int(trace.grade)
                else:
                    old_grades_exo[trace.pl] = max(int(trace.grade), old_grades_exo[trace.pl])
            if trace.pl not in max_grades_exo:
                max_grades_exo[trace.pl] = int(trace.grade)
            else:
                max_grades_exo[trace.pl] = max(int(trace.grade), max_grades_exo[trace.pl])
    return nb_answer_user, nb_attempt

def fill_tags(max_grades_exo, old_grades_exo):
    tags = {}
    for exo in max_grades_exo:
        if "tag" in exo.json:
            for tag in exo.json["tag"].split("|"):
                if tag not in tags:
                    if exo in old_grades_exo:
                        tags[tag] = [[max_grades_exo[exo]], [old_grades_exo[exo]]]
                    else:
                        tags[tag] = [[max_grades_exo[exo]], []]
                else:
                    if exo in old_grades_exo:
                        tags[tag][1].append(old_grades_exo[exo])
                    tags[tag][0].append(max_grades_exo[exo])
    return tags

def fill_tags_info(tags):
    tags_info = []
    for tag in tags:
        pts_tag = sum(tags[tag][0])
        dif = pts_tag - sum(tags[tag][1])
        evo = (dif*100)/(pts_tag-dif) if pts_tag != dif else -1
        mean_tag = pts_tag / len(tags[tag][0]) if tags[tag][0] else 0
        old_mean_tag = sum(tags[tag][1]) / len(tags[tag][1]) if tags[tag][1] else 0
        evo_mean = mean_tag - old_mean_tag if old_mean_tag else None
        tags_info.append((tag, pts_tag, dif, evo, mean_tag, evo_mean))
    tags_info.sort(key=lambda tag: tag[1], reverse=True)
    return tags_info

def compute_user_stats(max_grades_exo, nb_attempt):
    sum_grades = 0
    for exo in max_grades_exo:
        sum_grades += max_grades_exo[exo]
    mean_grade = sum_grades / len(max_grades_exo) if max_grades_exo else 0
    mean_attempt = nb_attempt / len(max_grades_exo) if max_grades_exo else 0
    return sum_grades, mean_grade, mean_attempt


@login_required
def progress_user(request, user_id):
    """Return the progress summary of `user` in argument.
    """
    user = get_object_or_404(User, pk=user_id)
    if (request.user != user) and not request.user.profile.can_load():
        raise PermissionDenied("Vous ne pouvez pas visualiser la progression "
                               "d'autres utilisateurs que vous même.")
    all_answer_user = Answer.objects.filter(user=user).select_related('pl')
    max_grades_exo = {}
    old_grades_exo = {}
    nb_answer_user = 0
    nb_attempt = 0
    date_list = []
    nb_answer_user, nb_attempt = fill_grades_exo(all_answer_user, date_list, old_grades_exo, max_grades_exo)
    all_days, ybegin, yend = this_year_calendar_activity(date_list)
    tags = fill_tags(max_grades_exo, old_grades_exo)
    tags_info = fill_tags_info(tags)
    sum_grades = 0
    for exo in max_grades_exo:
        sum_grades += max_grades_exo[exo]
    mean_grade = sum_grades / len(max_grades_exo) if max_grades_exo else 0
    mean_attempt = nb_attempt / len(max_grades_exo) if max_grades_exo else 0
    sum_grades, mean_grade, mean_attempt = compute_user_stats(max_grades_exo, nb_attempt)
    fr_days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
            
    context = {'first_name': user.first_name,
               'last_name': user.last_name,
               'nb_answer_user': nb_answer_user,
               'nb_touched_exos': len(max_grades_exo),
               'total_point': sum_grades,
               'mean_grade': mean_grade,
               'nb_attempt': nb_attempt,
               'mean_attempt': mean_attempt,
               'tags_info': tags_info,
               'all_days': all_days,
               'ybegin': ybegin,
               'yend': yend,
               'fr_days': fr_days, }
    return render(request, 'progress/index.html', context)


def start_of_period():
    """
    Return the date from which will be calculated the progression
    evolution. This date is the nearest passed first of september.

    EXEMPLES::
    >>> from datetime import date
    >>> d = start_of_period()
    >>> d.month
    9
    >>> d.day
    1
    """
    today = date.today()
    this_year = today.year
    this_month = today.month
    first_semester = [1, 2, 3, 4, 5, 6, 7, 8]
    # last_semester = [9, 10, 11, 12]
    if this_month in first_semester:
        begin = this_year - 1
    else:
        begin = this_year
    return date(begin, 9, 1)


def this_year_calendar_activity(date_list):
    """Return a calandar of volume activity over the current
    educationnal year (from first of Spetember until last day of
    august).

    it returns a list of lists of tuples of size 3. It contains 7
    elements (dayweek in line). Each element is a list of 53 elements
    (53 mondays, 53 tuesdays, etc...), thus each day is described with
    3 values `(action, fraction, day_fr` where `action` is the number
    of action requiring a secured execution environement. `fraction`
    is an integer in `[0, 1, ..., 9]` which index the decile of the
    quantity of actions among all days. finaly `day_fr` is a python
    string in french describing the day.
    """
    # first september of the current education year
    # fy, fw, fd = start_of_period().isocalendar()
    fy, fw, fd = start_of_period().isocalendar()
    begin, end = fy, fy+1
    all_days = [[(-1, -1, '')]*53 for i in range(7)]
    for dat in date_list:
        w, d = day_index_education(dat, fy, fw, fd)
        if w != -1 and d != -1:
            if all_days[d][w][0] == -1:
                strdat = str(dat.day)
                strdat += [' None ', ' Jan ', ' Fév ', ' Mars ',
                           ' Avril ', ' Mai ', ' Juin ', ' Jui ',
                           ' Aout ', ' Sept ', ' Oct ', ' Nov ', ' Déc '][dat.month]
                strdat += str(dat.year)
                all_days[d][w] = (1, 0, strdat)
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
        return (52 + w - fw - int(d == 0), d - 1 + (7*int(d == 0)))
    if y == fy:
        if w >= fw:
            if d >= fd:
                return (w - fw - int(d == 0), d - 1 + (7*int(d == 0)))
    return (-1, -1)


@login_required
def student_list(request):
    """Return the list of courses for which the requesting user is a
    teacher and display a tableau of all students for these
    courses. Element student will carry a link to their personnal
    progression.
    """
    if not request.user.profile.can_load():
        raise PermissionDenied("Vous ne pouvez pas visualiser la progression "
                               "d'autres utilisateurs que vous même.")
    # Good as long as 0 hardcode base activity...
    base_0 = get_object_or_404(Activity, id=0)
    courses = list()
    for item in base_0.indexed_activities():
        if item.activity_type == "course" and item.is_teacher(request.user):
            courses.append(item)
    student_list = {}
    for activity in courses:
        student_list[activity.name] = []
        for student in activity.student.all():
            data_st = (student.id, student.first_name, student.last_name)
            student_list[activity.name].append(data_st)
        student_list[activity.name].sort(key=lambda x: x[2])
        grouped = []
        nb_stud = len(student_list[activity.name])
        for i in range(0, nb_stud, 4):
            grouped.append(student_list[activity.name][i:min(i+4, nb_stud)])
        student_list[activity.name] = grouped
    context = {'student_list': student_list, }
    return render(request, 'progress/student_list.html', context)
