
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
    datedic=Counter()
    for a in queryset :
        if a.user not in userdic:
            userdic[a.user.id]=[]
        if a.grade and a.grade > -1:
            sdate = datetime.datetime.strftime(a.date, "%Y/%m/%d")
            datedic[sdate] += 1
            userdic[a.user.id].append(sdate)



    plt.plot(list(datedic.values()))
    x = mpld3.fig_to_html(plt.gcf())
    return render(request, "stats/stats.html", {  "show": "The show<br/>"+x,})



from django.contrib.auth.models import User
from playexo.enums import State
import functools
import operator
from loader.models import PL

def plstats(request, plid):

    qscount= 0
    while not qscount > 0:
        plid += 1
        queryset = Answer.objects.filter(pl=plid)
        qscount = len(queryset)
    userpldic = {}

    pl = PL.objects.filter(pk=plid)

    x=""
    y=""
    deltas=[]
    timedelta=[]
    for a in queryset:
        name = User.objects.get(pk=a.user.id).get_username()+" "
        if State.by_grade(a.grade) == State.STARTED: # and a.user.id not in userpldic:
            userpldic[a.user.id]= list()
            userpldic[a.user.id].append((name, str(State.by_grade(a.grade)), a.date))
        else:
            if State.by_grade(a.grade) == State.SUCCEEDED:
                titi=a.date - userpldic[a.user.id][0][2]
                timedelta.append(titi)
                deltas.append(titi.seconds)
                userpldic[a.user.id].append((name, str(State.by_grade(a.grade)), titi))
                y+= str(titi)+"\n "
    qscount = len(queryset)
    for uid in userpldic.keys():
        x += "-"+str(uid)
    mean = functools.reduce(operator.add, deltas) / len(deltas)
    text= "name: %s max: %s qscount : %d" % (str(pl[0].name),str(max(deltas)), qscount)
    text += str(deltas)
    plt.hist(deltas)
    plt.hist(timedelta)
    x = mpld3.fig_to_html(plt.gcf())
    return render(request, "stats/stats.html", { "show": text + x, })

"""
import random
import matplotlib.pyplot as plt
import matplotlib.dates as mdates

# generate some random data (approximately over 5 years)
data = [float(random.randint(1271517521, 1429197513)) for _ in range(1000)]

# convert the epoch format to matplotlib date format 
mpl_data = mdates.epoch2num(data)

# plot it
fig, ax = plt.subplots(1,1)
ax.hist(mpl_data, bins=50, color='lightblue')
ax.xaxis.set_major_locator(mdates.YearLocator())
ax.xaxis.set_major_formatter(mdates.DateFormatter('%d.%m.%y'))
plt.show()"""



class TagCounter(dict):
    def __missing__(self, key):
        return [0,0]

@login_required
def tags(request):
    queryset = Answer.objects.all()
    tdic=TagCounter()
    dic=""
    for a in queryset :
        pl = a.pl
        dic = pl.json

        if "tag" in dic:
            lt = dic['tag'].split('|')
        else:
            lt = ['TUTU']
        for t in lt:
            x,y = 0,0
            if a.grade and a.grade == 100:
                tdic[t]= [tdic[t][0]+1,tdic[t][1]]
            else:
                tdic[t] = [tdic[t][0], tdic[t][1]+ 1]
            print(str(tdic[t]))
    for k in tdic.keys():
        tdic[k]=tdic[k][0]/tdic[k][1]

    return render(request, "stats/stats.html", {
        "show": "toto"+str(tdic),
    })

@login_required
def datestats(request):
    # if not User :
    #     queryset = Answer.objects.all()
    # else:
    queryset = Answer.objects.filter(user= request.user)
    if len(queryset)<1:
        queryset = Answer.objects.all()
    datedic = Counter()
    gooddic = Counter()
    meandic = dict()
    for a in queryset :
        if a.date:
            sdate = datetime.datetime.strftime(a.date, "%Y/%m/%d")
            datedic[sdate] += 1
            if a.grade and a.grade > 0 :
                gooddic[sdate] += 1
            else:
                gooddic[sdate] += 0
    height = max(datedic.values())
    mean = ( sum(gooddic.values())/sum(datedic.values()))*height
    hzondic=dict()
    for k in gooddic.keys():
        meandic[k] = (gooddic[k]/datedic[k])*height
        hzondic[k]= mean

    plt.figure(num=plt.gcf().number, figsize=(12, 14))
    plt.gca().set_title( 'Tentatives et tentatives réussies ', fontsize=20)
    plt.plot(list(datedic.values()))
    plt.plot(list(gooddic.values()),"red")
    plt.plot(list(meandic.values()), "green")
    plt.plot(list(hzondic.values()), "green")

    x = mpld3.fig_to_html(plt.gcf())
    return render(request, "stats/stats.html", {
        "show": "coucou:"+x,
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



def make_ticklabels_invisible(fig):
    for i, ax in enumerate(fig.axes):
        ax.text(0.5, 0.5, "ax%d" % (i + 1), va="center", ha="center")
        ax.tick_params(labelbottom=False, labelleft=False)


def grid(request):


    from matplotlib.gridspec import GridSpec
    # demo 3 : gridspec with subplotpars set.

    fig = plt.figure(figsize=(12,12))

    fig.suptitle("GridSpec w/ different subplotpars")

    gs1 = GridSpec(3, 3)
    gs1.update(left=0.05, right=0.48, wspace=0.05)
    ax1 = plt.subplot(gs1[:-1, :])
    ax2 = plt.subplot(gs1[-1, :-1])
    ax3 = plt.subplot(gs1[-1, -1])

    gs2 = GridSpec(3, 3)
    gs2.update(left=0.55, right=0.98, hspace=0.05)
    ax4 = plt.subplot(gs2[:, :-1])
    ax5 = plt.subplot(gs2[:-1, -1])
    ax6 = plt.subplot(gs2[-1, -1])

    make_ticklabels_invisible(fig)

    x = mpld3.fig_to_html(fig)
    return render(request, "stats/stats.html", {
        "show": x,
    })