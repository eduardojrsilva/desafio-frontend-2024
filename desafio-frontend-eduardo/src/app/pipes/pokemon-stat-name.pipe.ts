import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonStatName'
})
export class PokemonStatNamePipe implements PipeTransform {

  transform(name: string): string {
    const formattedName = name.replace(/-/g, ' ');

    return formattedName;
  }

}
