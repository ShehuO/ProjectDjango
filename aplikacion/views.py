from django.shortcuts import render
from .models import *
# Create your views here.
def home(request):
    items = Item.objects.all()
    context = {"items":items}
    return render (request, "home.html",context)
def about(request):
    return render (request, "about.html")
def contact(request):
    return render (request, "contact.html")
def detailitem(request,id):
    itemDetail = Item.objects.get(pk=id)
    context = {"itemDetail":itemDetail}
    return render(request,"detailitem.html",context)