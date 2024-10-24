import { Component, Input } from '@angular/core';

@Component({
  selector: 'ice-svg',
  templateUrl: './ice-svg.component.html',
})
export class IceSvgComponent {
  @Input() fill = '#fff';

  @Input() width = '512';

  @Input() height = '512';
}
