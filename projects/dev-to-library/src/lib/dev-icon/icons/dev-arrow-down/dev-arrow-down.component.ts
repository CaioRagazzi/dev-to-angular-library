import { Component } from '@angular/core';
import { IDevIcon } from '../../models/IDevIcon.interface';
import { IconComponent } from '../../icon/icon.component';

@Component({
  selector: 'dev-arrow-down',
  templateUrl: './dev-arrow-down.component.html',
  styleUrls: [
    './dev-arrow-down.component.scss',
    '../../styles/dev-arrow.component.scss',
  ],
})
export class DevArrowDownComponent extends IconComponent implements IDevIcon {
  getStyle() {
    return {
      'border-color': `${this.color}`,
    };
  }
}
