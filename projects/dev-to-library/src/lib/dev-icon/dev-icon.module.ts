import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevArrowUpComponent } from './icons/dev-arrow-up/dev-arrow-up.component';
import { IconComponent } from './icon/icon.component';
import { DevArrowDownComponent } from './icons/dev-arrow-down/dev-arrow-down.component';
import { DevArrowLeftComponent } from './icons/dev-arrow-left/dev-arrow-left.component';
import { DevArrowRightComponent } from './icons/dev-arrow-right/dev-arrow-right.component';

@NgModule({
  declarations: [
    DevArrowUpComponent,
    DevArrowDownComponent,
    DevArrowLeftComponent,
    DevArrowRightComponent,
    IconComponent,
  ],
  imports: [CommonModule],
  exports: [IconComponent],
})
export class DevIconModule {}
