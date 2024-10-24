import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { WeatherService } from '../../services/weather.service';
import { PokemonService } from '../../services/pokemon.service';

import { FormattedWeather } from '../../models/weather';
import { FormattedPokemon, PokemonByTypeResponse, PokemonInTypeList, PokemonList } from '../../models/pokemon';

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

  onSubmitForm({ value }: NgForm): void {
    const { city, country } = value;

    this.weatherService.getCityWeather(city, country).subscribe((data) => {
      this.weatherInfo = formatWeatherResponse(data);

      this.isRaining = isRaining(this.weatherInfo.weather);

      this.pokemonType = getPokemonTypeByWeather({
        temperature: this.weatherInfo.temperature,
        isRaining: this.isRaining,
      });

      this.getPokemonList();
    });
  }

  getPokemonList(): void {
    this.pokemonService.getPokemonByType(this.pokemonType as PokemonType).subscribe((data) => {
      this.pokemonByType = data;

      this.getPokemonInfo();
    });
  }

  getPokemonInfo(filterByName?: string): void {
    const pokemonList = filterByName
      ? this.pokemonByType?.pokemon.filter(({ pokemon }) => pokemon.name !== filterByName)
      : this.pokemonByType?.pokemon;

    this.randomPokemon = getRandomPokemon(pokemonList as PokemonList);

    this.pokemonService.getPokemonByUrl(this.randomPokemon.url).subscribe((data) => {
      this.pokemonInfo = formatPokemonResponse(data);

      this.pokemonTypeInfo = pokemonTypeControl[this.pokemonType as PokemonType];
    });
  }

  cleanForm(): void {
    this.weatherInfo = undefined;

    this.isRaining = false;

    this.pokemonType = undefined;

    this.pokemonByType = undefined;

    this.randomPokemon = undefined;

    this.pokemonInfo = undefined;

    this.pokemonTypeInfo = undefined;
  }

  searchNewPokemon(): void {
    this.getPokemonInfo(this.pokemonInfo?.name);
  }
}
