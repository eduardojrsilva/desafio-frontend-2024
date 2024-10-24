import { Component, Input } from '@angular/core';

@Component({
  selector: 'bug-svg',
  templateUrl: './bug-svg.component.html',
})
export class BugSvgComponent {
  @Input() fill = '#fff';

  @Input() width = '512';

  @Input() height = '512';
}
