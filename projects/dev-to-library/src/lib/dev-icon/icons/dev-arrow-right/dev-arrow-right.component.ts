import { Component } from '@angular/core';
import { IDevIcon } from '../../models/IDevIcon.interface';
import { IconComponent } from '../../icon/icon.component';

@Component({
  selector: 'dev-arrow-right',
  templateUrl: './dev-arrow-right.component.html',
  styleUrls: [
    './dev-arrow-right.component.scss',
    '../../styles/dev-arrow.component.scss',
  ],
})
export class DevArrowRightComponent extends IconComponent implements IDevIcon {
  getStyle() {
    return {
      'border-color': `${this.color}`,
    };
  }
}
