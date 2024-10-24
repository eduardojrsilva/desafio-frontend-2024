import { Component, Input } from '@angular/core';

@Component({
  selector: 'normal-svg',
  templateUrl: './normal-svg.component.html',
})
export class NormalSvgComponent {
  @Input() fill = '#fff';

  @Input() width = '512';

  @Input() height = '512';
}
