import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  Type,
} from '@angular/core';
import { DevArrowUpComponent } from '../icons/dev-arrow-up/dev-arrow-up.component';
import { IDevIcon } from '../models/IDevIcon.interface';
import { DevArrowDownComponent } from '../icons/dev-arrow-down/dev-arrow-down.component';
import { DevArrowLeftComponent } from '../icons/dev-arrow-left/dev-arrow-left.component';
import { DevArrowRightComponent } from '../icons/dev-arrow-right/dev-arrow-right.component';

@Component({
  selector: 'my-icon-comp',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css',
})
export class IconComponent implements OnChanges {
  @Input() name = '';
  @Input() color = 'black';
  currentIconComponent!: Type<IDevIcon>;
  inputs!: Record<string, unknown>;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['name'].currentValue) {
      switch (changes['name'].currentValue) {
        case 'arrow-up':
          this.currentIconComponent = DevArrowUpComponent;
          break;
        case 'arrow-down':
          this.currentIconComponent = DevArrowDownComponent;
          break;
        case 'arrow-left':
          this.currentIconComponent = DevArrowLeftComponent;
          break;
        case 'arrow-right':
          this.currentIconComponent = DevArrowRightComponent;
          break;

        default:
          console.warn('No icon was found with prop name');
          break;
      }

      this.setInputs();
    }
  }

  setInputs() {
    this.inputs = { color: this.color };
  }
}
