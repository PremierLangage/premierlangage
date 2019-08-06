from django import forms



class UploadForm(forms.Form):
    name = forms.CharField(max_length=255, help_text=" * Optionnal", required=False)
    file = forms.FileField(help_text=" * Only .tar.gz, .tar.xz and .zip archive can be extracted"
                                     "directly on the plateform")
