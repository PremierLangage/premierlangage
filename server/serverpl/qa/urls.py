from django.conf.urls import include
from django.urls import path, re_path
from qa import views

app_name = 'ask'

urlpatterns = [
    path(r'', views.IndexView.as_view(), name='index'),
    path(r'question/', views.QuestionView.as_view(), name='create_question'),
    path(r'question/<int:pk>/', views.QuestionView.as_view(), name='question'),
    path(r'answer/<int:pk>/',views.AnswerView.as_view(), name='answer'),
    path(r'comment-answer/<int:question_pk>/<int:pk>/', views.AnswerCommentView.as_view(), name='answer_comment'),
    path(r'comment-question/<int:question_pk>/<int:pk>/', views.QuestionCommentView.as_view(), name='question_comment'),
    path(r'vote/question/<int:question_pk>/', views.QuestionVoteView.as_view(), name='question_vote'),
    path(r'vote/answer/<int:question_pk>/<int:pk>/', views.AnswerVoteView.as_view(), name='answer_vote'),
]
