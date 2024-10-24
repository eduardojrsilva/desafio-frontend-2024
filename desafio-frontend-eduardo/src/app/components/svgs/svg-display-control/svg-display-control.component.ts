import { Component, Input } from '@angular/core';

@Component({
  selector: 'svg-display-control',
  templateUrl: './svg-display-control.component.html',
})
export class SvgDisplayControlComponent {
  @Input() pokemonType = '';

  @Input() fill = '#fff';

  @Input() width = '512';

  @Input() height = '512';
}
