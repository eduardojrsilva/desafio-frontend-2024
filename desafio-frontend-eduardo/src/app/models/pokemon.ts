export interface PokemonInTypeList {
  name: string,
  url: string,
}

export interface PokemonByTypeResponse {
  pokemon: Array<{
    pokemon: PokemonInTypeList,
  }>;
}

export interface PokemonResponse {
  id: string;
  name: string;
  sprites: {
    front_default: string;
  };
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;

    }
  }>;
}

export interface FormattedPokemon {
  id: string;
  name: string;
  imageUrl: string;
  stats: Array<{
    name: string;
    stat: number;
  }>;
}