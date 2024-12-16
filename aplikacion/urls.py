from django.urls import path
from . import views

urlpatterns = [
    path("",views.home,name="HomePage"),
    path("about/",views.about,name="aboutPage"),
    path("ContactUs/",views.contact,name="ContactPage")
]