from django.contrib import admin

from qa.models import (QAAnswer, QAAnswerComment, QAAnswerVote, QAQuestion, QAQuestionComment,
                       QAQuestionVote)


admin.site.register(QAQuestion)
admin.site.register(QAAnswer)
admin.site.register(QAAnswerComment)
admin.site.register(QAQuestionComment)
admin.site.register(QAAnswerVote)
admin.site.register(QAQuestionVote)
