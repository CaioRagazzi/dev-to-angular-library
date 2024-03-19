import { Component, Input } from '@angular/core';
import { IDevIcon } from '../../models/IDevIcon.interface';

@Component({
  selector: 'lib-dev-arrow-right',
  templateUrl: './dev-arrow-right.component.html',
  styleUrls: [
    './dev-arrow-right.component.scss',
    '../../styles/dev-arrow.component.scss',
  ],
})
export class DevArrowRightComponent implements IDevIcon {
  @Input() color!: string;

  getStyle() {
    return {
      'border-color': `${this.color}`,
    };
  }
}
