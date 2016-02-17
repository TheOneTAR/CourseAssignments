"""portfolio_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Import the include() function: from django.conf.urls import url, include
    3. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import url
from django.contrib import admin

from port_main import views as port_views
from angry_dice import views as angry_views
from polls import views as poll_views


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', port_views.home_page, name='home_page'),
    url(r'^dinosaurs/$', port_views.dinosaurs, name="dinosaurs"),
    url(r'^angryDice/$', angry_views.angry, name="angry"),
    url(r'^questions/$', poll_views.questions, name="questions"),
    url(r'questions/(?P<question_id>[0-9]+)/$', poll_views.single_question, name="single_question")
]









