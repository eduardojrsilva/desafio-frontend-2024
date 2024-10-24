import { Component, Input } from '@angular/core';

@Component({
  selector: 'fire-svg',
  templateUrl: './fire-svg.component.html',
})
export class FireSvgComponent {
  @Input() fill = '#fff';

  @Input() width = '512';

  @Input() height = '512';
}
