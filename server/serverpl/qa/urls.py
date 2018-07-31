from django.conf.urls import include, url

from . import views

app_name = 'ask'

urlpatterns = [
    url(r'^$', views.QAQuestionIndexView.as_view(), name='qa_index'),

    url(r'^question/(?P<pk>\d+)/$',
        views.QAQuestionDetailView.as_view(), name='qa_detail'),

    url(r'^question/(?P<pk>\d+)/(?P<slug>[-_\w]+)/$',
        views.QAQuestionDetailView.as_view(), name='qa_detail'),

    url(r'^question/answer/(?P<answer_id>\d+)/$',
        views.QAAnswerQAQuestionView.as_view(), name='qa_answer_question'),

    url(r'^question/close/(?P<question_id>\d+)/$',
        views.CloseQAQuestionView.as_view(), name='qa_close_question'),

    url(r'^new-question/$', views.CreateQAQuestionView.as_view(), name='qa_create_question'),

    url(r'^edit-question/(?P<question_id>\d+)/$',
        views.UpdateQAQuestionView.as_view(),
        name='qa_update_question'),

    url(r'^answer/(?P<question_id>\d+)/$',
        views.CreateQAAnswerView.as_view(), name='qa_create_answer'),

    url(r'^answer/edit/(?P<answer_id>\d+)/$',
        views.UpdateQAAnswerView.as_view(), name='qa_update_answer'),

    url(r'^vote/question/(?P<object_id>\d+)/$',
        views.QAQuestionVoteView.as_view(), name='qa_question_vote'),

    url(r'^vote/answer/(?P<object_id>\d+)/$',
        views.QAAnswerVoteView.as_view(), name='qa_answer_vote'),

    url(r'^comment-answer/(?P<answer_id>\d+)/$',
        views.CreateQAAnswerCommentView.as_view(),
        name='qa_create_answer_comment'),

    url(r'^comment-question/(?P<question_id>\d+)/$',
        views.CreateQAQuestionCommentView.as_view(),
        name='qa_create_question_comment'),

    url(r'^comment-question/edit/(?P<comment_id>\d+)/$',
        views.UpdateQAQuestionCommentView.as_view(),
        name='qa_update_question_comment'),

    url(r'^comment-answer/edit/(?P<comment_id>\d+)/$',
        views.UpdateQAAnswerCommentView.as_view(),
        name='qa_update_answer_comment'),

    url(r'^search/$', views.QAQuestionsSearchView.as_view(), name='qa_search'),

    url(r'^tag/(?P<tag>[-\w]+)/$',
        views.QAQuestionsByTagView.as_view(), name='qa_tag'),

    url(r'^profile/(?P<user_id>\d+)/$', views.profile, name='qa_profile'),

    url(r'hitcount/', include('hitcount.urls', namespace='hitcount')),

]
