from django.contrib import admin
from django_markdown.admin import MarkdownModelAdmin
from qa.models import (QAAnswer, QAAnswerComment, QAAnswerVote, QAQuestionVote, QAQuestion,
                       QAQuestionComment)

admin.site.register(QAQuestion)
admin.site.register(QAAnswer, MarkdownModelAdmin)
admin.site.register(QAAnswerComment)
admin.site.register(QAQuestionComment)
admin.site.register(QAAnswerVote)
admin.site.register(QAQuestionVote)
