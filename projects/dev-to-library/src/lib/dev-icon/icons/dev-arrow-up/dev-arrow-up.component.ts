import { Component, Input } from '@angular/core';
import { IDevIcon } from '../../models/IDevIcon.interface';

@Component({
  selector: 'dev-arrow-up',
  templateUrl: './dev-arrow-up.component.html',
  styleUrls: [
    './dev-arrow-up.component.scss',
    '../../styles/dev-arrow.component.scss',
  ],
})
export class DevArrowUpComponent implements IDevIcon {
  @Input() color = 'black';

  getStyle() {
    return {
      'border-color': `${this.color}`,
    };
  }
}
