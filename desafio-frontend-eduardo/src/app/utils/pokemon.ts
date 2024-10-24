import { FormattedPokemon, PokemonByTypeResponse, PokemonInTypeList, PokemonResponse } from "../models/pokemon";

export type PokemonType =
  | 'normal'
  | 'electric'
  | 'ice'
  | 'water'
  | 'grass'
  | 'ground'
  | 'bug'
  | 'rock'
  | 'fire'
  ;

interface PokemonTypeControl {
  mainColor: string;
  cardClass: string;
  label: string;
  type: PokemonType;
}

type TemperatureParams =
  | { hasTemperature: true; minTemperature: number; maxTemperature: number; }
  | { hasTemperature?: false; };

export type ControlType = PokemonTypeControl & TemperatureParams;

export const pokemonTypeControl: Record<PokemonType, ControlType> = {
  normal: {
    hasTemperature: false,
    mainColor: '#5c320d',
    cardClass: 'normal-card',
    label: 'Normal',
    type: 'normal',
  },

  electric: {
    hasTemperature: false,
    mainColor: '#444444',
    cardClass: 'electric-card',
    label: 'Elétrico',
    type: 'electric',
  },

  ice: {
    hasTemperature: true,
    minTemperature: -999,
    maxTemperature: 4,
    mainColor: '#01016b',
    cardClass: 'ice-card',
    label: 'Gelo',
    type: 'ice',
  },

  water: {
    hasTemperature: true,
    minTemperature: 5,
    maxTemperature: 9,
    mainColor: '#1414b8',
    cardClass: 'water-card',
    label: 'Água',
    type: 'water',
  },

  grass: {
    hasTemperature: true,
    minTemperature: 12,
    maxTemperature: 14,
    mainColor: '#024514',
    cardClass: 'grass-card',
    label: 'Grama',
    type: 'grass',
  },

  ground: {
    hasTemperature: true,
    minTemperature: 15,
    maxTemperature: 20,
    mainColor: '#291f01',
    cardClass: 'ground-card',
    label: 'Terra',
    type: 'ground',
  },

  bug: {
    hasTemperature: true,
    minTemperature: 23,
    maxTemperature: 26,
    mainColor: '#370252',
    cardClass: 'bug-card',
    label: 'Inseto',
    type: 'bug',
  },

  rock: {
    hasTemperature: true,
    minTemperature: 27,
    maxTemperature: 33,
    mainColor: '#302f30',
    cardClass: 'rock-card',
    label: 'Pedra',
    type: 'rock',
  },

  fire: {
    hasTemperature: true,
    minTemperature: 34,
    maxTemperature: 999,
    mainColor: '#8f0303',
    cardClass: 'fire-card',
    label: 'Fogo',
    type: 'fire',
  },
}

export function formatPokemonResponse({
  id,
  name,
  sprites,
  stats
}: PokemonResponse): FormattedPokemon {
  const formatted = {
    id,
    name,
    imageUrl: sprites.front_default,
    stats: stats.map(({ base_stat, stat }) => ({
      name: stat.name,
      stat: base_stat,
    })),
  };

  return formatted;
}

interface PokemonTypeByWeatherParams {
  temperature: number;
  isRaining: boolean;
}

export function getPokemonTypeByWeather({
  temperature, isRaining
}: PokemonTypeByWeatherParams): PokemonType {
  if (isRaining) return 'electric';

  const type = Object.entries(pokemonTypeControl)
    .filter(([_, { hasTemperature }]) => hasTemperature)
    .reduce((acc, [type, control]) => {
      const maxTemperature = (control.hasTemperature && control.maxTemperature) as number;
      const minTemperature = (control.hasTemperature && control.minTemperature) as number;

      return temperature >= minTemperature && temperature <= maxTemperature ? type : acc;
    }, 'normal');

  return type as PokemonType;
}

export function getRandomPokemon({ pokemon }: PokemonByTypeResponse): PokemonInTypeList {
  const length = pokemon.length;

  const randomIndex = Math.floor(Math.random() * length);

  const randomPokemon = pokemon.at(randomIndex);

  return randomPokemon?.pokemon as PokemonInTypeList;
}
