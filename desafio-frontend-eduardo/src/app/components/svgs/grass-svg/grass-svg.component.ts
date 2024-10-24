import { Component, Input } from '@angular/core';

@Component({
  selector: 'grass-svg',
  templateUrl: './grass-svg.component.html',
})
export class GrassSvgComponent {
  @Input() fill = '#fff';

  @Input() width = '512';

  @Input() height = '512';
}
