import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { WeatherService } from '../../services/weather.service';
import { PokemonService } from '../../services/pokemon.service';

import { FormattedWeather } from '../../models/weather';
import { FormattedPokemon, PokemonByTypeResponse, PokemonInTypeList } from '../../models/pokemon';

import { formatWeatherResponse, isRaining } from '../../utils/weather';
import {
  ControlType,
  formatPokemonResponse,
  getPokemonTypeByWeather,
  getRandomPokemon,
  PokemonType,
  pokemonTypeControl
} from '../../utils/pokemon';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  weatherInfo: FormattedWeather | undefined;

  isRaining: boolean = false;

  pokemonType: PokemonType | undefined;

  pokemonByType: PokemonByTypeResponse | undefined;

  randomPokemon: PokemonInTypeList | undefined;

  pokemonInfo: FormattedPokemon | undefined;

  pokemonTypeInfo: ControlType | undefined;

  constructor(private weatherService: WeatherService, private pokemonService: PokemonService) { }

  onSubmitForm({ value, }: NgForm) {
    const { city, country } = value;

    this.weatherService.getCityWeather(city, country).subscribe((data) => {
      this.weatherInfo = formatWeatherResponse(data);

      this.isRaining = isRaining(this.weatherInfo.weather);

      this.pokemonType = getPokemonTypeByWeather({
        temperature: this.weatherInfo.temperature,
        isRaining: this.isRaining,
      });

      this.pokemonService.getPokemonByType(this.pokemonType).subscribe((data) => {
        this.pokemonByType = data;

        this.randomPokemon = getRandomPokemon(this.pokemonByType as PokemonByTypeResponse);

        this.pokemonService.getPokemonByUrl(this.randomPokemon.url).subscribe((data) => {
          this.pokemonInfo = formatPokemonResponse(data);

          this.pokemonTypeInfo = pokemonTypeControl[this.pokemonType as PokemonType];
        });
      });
    });
  }
}
