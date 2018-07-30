from django.shortcuts import render, get_object_or_404
from django.http import Http404, HttpResponseRedirect, HttpResponse
from pokeapp.models import Pokemon
from .forms import PostForm
import json, os
from pprint import pprint
from django.conf import settings
from django.contrib import messages




# Create your views here.
def index(request):
    all_pokemons = Pokemon.objects.all()
    context = {
        'all_pokemons' : all_pokemons
    }
    return render(request, 'pokemon/index.html', context)

def create(request):
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = PostForm(request.POST)
        # check whether it's valid:
        if form.is_valid():
            new_pokemon = form.save(commit=False)
            # process the data in form.cleaned_data as required
            json_data = open(os.path.join(settings.BASE_DIR, 'pokemons.json'), encoding='latin1' )
            data = json.load(json_data) 
            for pokemon in data:
                if pokemon['name'] == request.POST['name']:
                    new_pokemon.picture = pokemon['image_url']
                    new_pokemon.pokemon_type = pokemon['types'][0]
                    new_pokemon.birthday = request.POST['birthday']
                    new_pokemon.name = request.POST['name']
                    new_pokemon.zodiac_sign = request.POST['zodiac_sign']
                    new_pokemon.blood_type = request.POST['blood_type']
                    new_pokemon.latitude = request.POST['latitude']
                    new_pokemon.longitude = request.POST['longitude']
                    new_pokemon.save()
                    messages.success(request, 'Pokemon ' + new_pokemon.name + ' agregado correctamente')
                    break
            else:
                messages.warning(request, 'Este no es un pokemon valido.')
    # if a GET (or any other method) we'll create a blank form
    else:
        form = PostForm()

    return render(request, 'pokemon/create.html', {'form': form})

def reports(request):
    if request.method == 'POST':
        month = request.POST['month']
        all_pokemons = Pokemon.objects.filter(birthday__month=month)
        context = {
            'all_pokemons' : all_pokemons
        }
        return render(request, 'pokemon/bymonth.html', context )
    else:
        return render(request, 'pokemon/reports.html', context=None)

def bytype(request):
    if request.method == 'POST':
        poke_type = request.POST['pokemon_type']
        all_pokemons = Pokemon.objects.filter(pokemon_type=poke_type)
        context = {
            'all_pokemons' : all_pokemons
        }
        return render(request, 'pokemon/bymonth.html', context )

def detail(request, pokemon_id):
    pokemon = get_object_or_404(Pokemon, pk=pokemon_id)
    return render(request, 'pokemon/detail.html', {'pokemon' : pokemon})