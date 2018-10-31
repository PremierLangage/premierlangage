
from django.shortcuts import render
from django.contrib.auth.decorators import login_required


import matplotlib.pyplot as plt
import mpld3

from playexo.models import Answer
import datetime

@login_required
def user(request):

    # Data access

    # the all shebang
    queryset = Answer.objects.all()
    i=1
    userdic={}

    for a in queryset :
        if a.user not in  userdic:
            userdic[a.user.id]=[]
        if a.grade and a.grade > -1 :
            sdate = datetime.datetime.strftime(a.date, "%Y/%m/%d")
            datedic[sdate] += 1
            userdic[a.user.id].append(sdate)



    plt.plot(list(datedic.values()))
    x = mpld3.fig_to_html(plt.gcf())
    return render(request, "stats/stats.html", {
        "show": x,
    })



@login_required
def datestats(request):
    queryset = Answer.objects.all()
    datedic = Counter()
    gooddic = Counter()
    for a in queryset :
        if a.date:
            sdate = datetime.datetime.strftime(a.date, "%Y/%m/%d")
            datedic[sdate] += 1
            if a.grade and a.grade > 0 :
                gooddic[sdate] += 1
            else:
                gooddic[sdate] += 0

    plt.figure(num=plt.gcf().number, figsize=(8, 14))
    plt.gca().set_title( 'Tentatives et tentatives réussies ', fontsize=20)
    plt.plot(list(datedic.values()))
    plt.plot(list(gooddic.values()),"red")
    x = mpld3.fig_to_html(plt.gcf())
    return render(request, "stats/stats.html", {
        "show": x,
    })

class Counter(dict):
    def __missing__(self, key):
        return 0



    # answers = JSONField(default='{}')
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    # pl = models.ForeignKey(PL, on_delete=models.CASCADE)
    # activity = models.ForeignKey(Activity, null=True, on_delete=models.CASCADE)
    # seed = models.CharField(max_length=100, default=time.time)
    # date = models.DateTimeField(default=timezone.now)
    # grade = models.IntegerField(null=True)
