import { Component } from '@angular/core';
import { IDevIcon } from '../../models/IDevIcon.interface';
import { IconComponent } from '../../icon/icon.component';

@Component({
  selector: 'dev-arrow-up',
  templateUrl: './dev-arrow-up.component.html',
  styleUrls: [
    './dev-arrow-up.component.scss',
    '../../styles/dev-arrow.component.scss',
  ],
})
export class DevArrowUpComponent extends IconComponent implements IDevIcon {
  getStyle() {
    return {
      'border-color': `${this.color}`,
    };
  }
}
