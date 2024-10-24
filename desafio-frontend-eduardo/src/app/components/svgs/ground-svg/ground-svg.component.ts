import { Component, Input } from '@angular/core';

@Component({
  selector: 'ground-svg',
  templateUrl: './ground-svg.component.html',
})
export class GroundSvgComponent {
  @Input() fill = '#fff';

  @Input() width = '512';

  @Input() height = '512';
}
