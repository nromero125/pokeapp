from django.db import models

# Create your models here.
class Pokemon(models.Model):
    name = models.CharField(max_length=50)
    birthday = models.DateField()
    latitude = models.FloatField()   
    longitude = models.FloatField()
    blood_type = models.CharField(max_length=50)
    favorite_food = models.CharField(max_length=50)
    pokemon_type = models.CharField(max_length=20, default='Desconocido')
    zodiac_sign = models.CharField(max_length=20, default='Desconocido')
    picture = models.CharField(max_length=200, default='Undefined')
    def __str__(self):
        return 'Yo soy ' + self.name