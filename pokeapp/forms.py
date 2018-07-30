from django import forms
from pokeapp.models import Pokemon
import datetime

class PostForm(forms.ModelForm):
    class Meta:
        model = Pokemon
        fields = ('name', 'birthday', 'latitude', 'longitude', 'zodiac_sign', 'favorite_food', 'blood_type')
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control'}),
        }
    name = forms.CharField(label='Nombre del pokemon', max_length=100, widget = forms.TextInput(
            attrs = {'class': 'form-control'}
        ))
    birthday = forms.DateField(label='Fecha de nacimiento', initial=datetime.date.today, widget = forms.TextInput(
            attrs = {'class': 'form-control', 'type': 'date'}
        ))
    latitude = forms.FloatField(label='Latitude', widget = forms.TextInput(
            attrs = {'class': 'form-control', 'type': 'number','id':'latitude'}
        ))    
    longitude = forms.FloatField(label='Longitude', widget = forms.TextInput(
            attrs = {'class': 'form-control', 'type': 'number', 'id' : 'longitude'}
        ))    
    zodiac_sign = forms.CharField(label='Signo zodiacal', max_length=100, widget = forms.TextInput(
            attrs = {'class': 'form-control'}
        ))
    favorite_food = forms.CharField(label='Comida favorita', max_length=100, widget = forms.TextInput(
            attrs = {'class': 'form-control'}
        ))
    blood_type = forms.CharField(label='Tipo de sangre', max_length=100, widget = forms.TextInput(
            attrs = {'class': 'form-control'}
        ))