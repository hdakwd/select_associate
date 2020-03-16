from django.shortcuts import render

# Create your views here.
from django.views.generic.base import TemplateView

class Login(TemplateView):
    def POST(self):
        pass
    def GET(self, request):
        return render(request, 'login.html')