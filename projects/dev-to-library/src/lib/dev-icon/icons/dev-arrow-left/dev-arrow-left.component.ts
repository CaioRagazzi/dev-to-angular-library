import { Component, Input } from '@angular/core';
import { IDevIcon } from '../../models/IDevIcon.interface';

@Component({
  selector: 'lib-dev-arrow-left',
  templateUrl: './dev-arrow-left.component.html',
  styleUrls: [
    './dev-arrow-left.component.scss',
    '../../styles/dev-arrow.component.scss',
  ],
})
export class DevArrowLeftComponent implements IDevIcon {
  @Input() color!: string;

  getStyle() {
    return {
      'border-color': `${this.color}`,
    };
  }
}
