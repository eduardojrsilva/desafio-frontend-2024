import { Component, Input } from '@angular/core';

@Component({
  selector: 'water-svg',
  templateUrl: './water-svg.component.html',
})
export class WaterSvgComponent {
  @Input() fill = '#fff';

  @Input() width = '512';

  @Input() height = '512';
}
