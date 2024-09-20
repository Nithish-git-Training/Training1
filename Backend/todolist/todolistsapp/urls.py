from django.urls import path
from .views import *


urlpatterns =[
    path('<int:pk>',detailstodo.as_view()),
    path('',listtodo.as_view()),
    path('add', addtodo.as_view()),
    path('delete/<int:pk>',deletetodo.as_view())
]