from django import forms
from django.conf import settings
from qa.models import QAQuestion


class QAQuestionForm(forms.ModelForm):
    class Meta:
        model = QAQuestion
        fields = ['title', 'description', 'tags']

    def __init__(self, *args, **kwargs):
        super(QAQuestionForm, self).__init__(*args, **kwargs)

        try:
            settings.QA_SETTINGS['qa_description_optional']
            self.fields['description'].required = not settings.QA_SETTINGS[
                'qa_description_optional']

        except KeyError:
            pass
