import yaml
from urllib.parse import urlencode

from django.http import HttpResponseNotAllowed, QueryDict


class HttpMethodMixin:
    allowed = ['GET', 'POST', 'HEAD', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'TRACE']
    
    def dispatch(self, *args, **kwargs):
        if self.request.method == "POST":
            data = self.request.POST
        elif self.request.method == "GET":
            data = self.request.GET
        elif self.request.method in ["PATCH", "PUT"]:
            data_dict = yaml.safe_load(self.request.body.decode())
            data = QueryDict(urlencode(data_dict) if data_dict else {})
        else:
            data = QueryDict()
        
        method = data.get('_method', self.request.method)
        
        if method:
            if method not in self.allowed:
                return HttpResponseNotAllowed(self.allowed, "Method Not Allowed (" + method + ")")
            
            if '_method' in data:
                data._mutable = True
                del data['_method']
                data._mutable = False
            
            self.request.method = method
            self.request.META['REQUEST_METHOD'] = method
            setattr(self.request, method, data)
        
        return super(HttpMethodMixin, self).dispatch(*args, **kwargs)
