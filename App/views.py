from django.shortcuts import render

# Create your views here.
from django.views.generic.base import TemplateView

class Login(TemplateView):
    template_name = 'App/login.html'
    def POST(self, request):
        return render(request, 'login.html')
    def GET(self, request):
        print('test.test.test.')
        return render('login.html')
    

class SelectAss(TemplateView):
    template_name = 'App/select_ass.html'
    def POST(self, request):
        return render(request, 'login.html')
    def GET(self, request):
        print('test.test.test.')
        return render('login.html')