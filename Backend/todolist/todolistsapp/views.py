from django.shortcuts import render
from rest_framework import generics
from .serializers import*
from .models import *

# Create your views here.


class listtodo(generics.ListAPIView):
    queryset = todo.objects.all()
    serializer_class = todoserializer


class detailstodo(generics.RetrieveUpdateAPIView):
    queryset = todo.objects.all()   
    serializer_class = todoserializer

 
class addtodo(generics.CreateAPIView):
    queryset = todo.objects.all()   
    serializer_class = todoserializer

        
class deletetodo(generics.DestroyAPIView):
    queryset = todo.objects.all()   
    serializer_class = todoserializer

               