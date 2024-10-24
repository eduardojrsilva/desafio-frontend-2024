import { Component, Input } from '@angular/core';

@Component({
  selector: 'rock-svg',
  templateUrl: './rock-svg.component.html',
})
export class RockSvgComponent {
  @Input() fill = '#fff';

  @Input() width = '512';

  @Input() height = '512';
}
