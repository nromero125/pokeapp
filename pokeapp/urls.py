from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('create', views.create, name='create'),
    path('reports', views.reports, name='reports'),
    path('bytype', views.bytype, name='bytype'),
    path('<int:pokemon_id>', views.detail, name='detail'),
]