import pandas as pd
import plotly.express as px
from django.shortcuts import render

from playexo.models import Answer

def get_possible_answers(activity):
    """
    This method is used to gather all the possible choices for each question (pl).
    it returns a dictionary with all the choices for each question.
    """
    possible_answers = dict()
    for pl in activity.indexed_pl():
        choices = pl.json['items'].splitlines()

        for key in pl.json:
            if key.startswith('group'):
                possible_answers[pl.json[key]['cid']] = dict()
                possible_answers[pl.json[key]['cid']] = (pl.json['title'] + ':' + key, choices)
    return possible_answers

def get_answers(activity):
    """
    This method is used to gather the number of times each answer was chosen. It enables anonymous voting.
    it returns a dictionary with the number of answers for each choice
    """
    answers = dict()
    
    for user in activity.student.all():
        for __, pl in enumerate(activity.indexed_pl()):
            last_answer = Answer.last(pl, user)
            if last_answer:
                for question in last_answer.answers.values():
                    cid = question['cid']
                    
                    # If question not encountered yet, initialize the dictionary
                    if cid not in answers:
                        answers[cid] = dict()
                        for item in question['items']:
                            answers[cid][item['id']] = 0
                    
                    answers[question['cid']][question['selection']] += 1
    return answers

def get_students(activity):
    """
    This method is used to gather the answers for each student
    :return: A list of students with their information and their answers to each question
    """
    students = list()
    for user in activity.student.all():
        tp = list()
        for __, pl in enumerate(activity.indexed_pl()):
            last_ans = Answer.last(pl, user)
            answers = []
            if last_ans is not None:   
                for question in last_ans.answers.values():
                    answers.append((question['cid'], question['selection']))
            tp.append({
                'name':   pl.json['title'],
                'answers': answers
            })
        students.append({
            'lastname': user.last_name,
            'object':   user,
            'id':       user.id,
            'question': tp,
        })
    

    # Sort list by students names
    students = sorted(students, key=lambda k: k['lastname'])
    return students

def survey_dashboard(request, activity):
    """
    This method is called when the dashboard of an activity is requested for a survey.
    :return: A rendered template of the survey dashboard
    """
    possible_answers = get_possible_answers(activity)
    answers = get_answers(activity) 

    graphs = []
    for id, (key, value) in enumerate(answers.items()):
        df1 = pd.DataFrame(dict(key=possible_answers[key][1], ans=value.values()))
        graph = px.bar(
                df1, 
                x=df1.key, 
                y=df1.ans, 
                color=px.colors.qualitative.Plotly[0:len(df1)],
                labels={"key": "Réponses", "ans": "Nombre de votes"}
                )
        graph.update_traces(showlegend=False)
        graphs.append((
            id, 
            possible_answers[key][0], 
            graph.to_html(full_html=False, default_height=500, default_width=700, include_plotlyjs=False)
        ))

    return render(request, 'activity/activity_type/pltp/survey_dashboard.html', {
        'possible_answers': possible_answers, 
        'answers':          answers,
        'course_name':      activity.parent.name,
        'activity_name':    activity.name,
        'students':         get_students(activity),
        'graphs':           graphs,
        'show_votes':       activity.activity_data.get('anonymous_vote', 'False') == 'False' and request.user not in activity.student.all() # Hide all students' answers for now, would be better to display only his own answers
    })
