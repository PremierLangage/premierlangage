from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import View

from .mixins import HttpMethodMixin


class TestView(HttpMethodMixin, View):
    template_name = 'django_http_method/template.html'

    def get(self, *args, **kwargs):
        return render(self.request, self.template_name, {
            'method': 'Received a GET',
            'params': self.request.GET.dict(),
        })

    def post(self, *args, **kwargs):
        return render(self.request, self.template_name, {
            'method': 'Received a POST',
            'params': self.request.POST.dict(),
        })

    def head(self, *args, **kwargs):
        return render(self.request, self.template_name, {'method': 'Received a HEAD'})

    def put(self, *args, **kwargs):
        return render(self.request, self.template_name, {
            'method': 'Received a PUT',
            'params': self.request.PUT.dict(),
        })

    def delete(self, *args, **kwargs):
        return render(self.request, self.template_name, {'method': 'Received a DELETE'})

    def patch(self, *args, **kwargs):
        return render(self.request, self.template_name, {
            'method': 'Received a PATCH',
            'params': self.request.PATCH.dict(),
        })

    def options(self, *args, **kwargs):
        return render(self.request, self.template_name, {'method': 'Received a OPTIONS'})

    def trace(self, *args, **kwargs):
        return render(self.request, self.template_name, {'method': 'Received a TRACE'})
