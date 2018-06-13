import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageAlertComponent } from './message-alert/message-alert.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MessageAlertComponent],
  exports: [
    MessageAlertComponent
  ]
})
export class SharedModule { }
