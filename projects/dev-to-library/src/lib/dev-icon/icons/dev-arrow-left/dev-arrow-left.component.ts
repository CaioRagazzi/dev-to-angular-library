import { Component } from '@angular/core';
import { IDevIcon } from '../../models/IDevIcon.interface';
import { IconComponent } from '../../icon/icon.component';

@Component({
  selector: 'dev-arrow-left',
  templateUrl: './dev-arrow-left.component.html',
  styleUrls: [
    './dev-arrow-left.component.scss',
    '../../styles/dev-arrow.component.scss',
  ],
})
export class DevArrowLeftComponent extends IconComponent implements IDevIcon {
  getStyle() {
    return {
      'border-color': `${this.color}`,
    };
  }
}
