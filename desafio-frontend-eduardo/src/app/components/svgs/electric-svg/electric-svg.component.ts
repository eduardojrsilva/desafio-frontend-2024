import { Component, Input } from '@angular/core';

@Component({
  selector: 'electric-svg',
  templateUrl: './electric-svg.component.html',
})
export class ElectricSvgComponent {
  @Input() fill = '#fff';

  @Input() width = '512';

  @Input() height = '512';
}
