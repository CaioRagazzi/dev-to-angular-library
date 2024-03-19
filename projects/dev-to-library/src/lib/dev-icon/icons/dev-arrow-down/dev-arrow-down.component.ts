import { Component, Input } from '@angular/core';
import { IDevIcon } from '../../models/IDevIcon.interface';

@Component({
  selector: 'lib-dev-arrow-down',
  templateUrl: './dev-arrow-down.component.html',
  styleUrls: [
    './dev-arrow-down.component.scss',
    '../../styles/dev-arrow.component.scss',
  ],
})
export class DevArrowDownComponent implements IDevIcon {
  @Input() color!: string;

  getStyle() {
    return {
      'border-color': `${this.color}`,
    };
  }
}
