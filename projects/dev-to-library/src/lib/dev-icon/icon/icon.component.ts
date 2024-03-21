import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-icon-comp',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css',
})
export class IconComponent {
  @Input() color = 'black';

  countHover() {
    console.log('hover feature');
  }
}
