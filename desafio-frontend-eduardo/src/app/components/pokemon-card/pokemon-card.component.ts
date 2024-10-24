import { Component, Input } from '@angular/core';

import { FormattedPokemon } from '../../models/pokemon';
import { ControlType } from '../../utils/pokemon';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent {
  @Input() pokemonInfo: FormattedPokemon | undefined;

  @Input() pokemonTypeInfo: ControlType | undefined;
}
