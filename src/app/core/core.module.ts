import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { GrowlModule } from 'primeng/growl';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { MenuComponent } from './menu/menu.component';
import { ErrorHandlerService } from './error-handler.service';
import { ConfirmationService } from 'primeng/api';
import { UtilsComponent } from './utils/utils.component';
import { RouterModule } from '../../../node_modules/@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MenubarModule,
    RouterModule,

    GrowlModule,
    ConfirmDialogModule,
  ],
  declarations: [MenuComponent, UtilsComponent],
  exports: [
    MenuComponent, UtilsComponent
  ],
  providers: [
    ErrorHandlerService,
    ConfirmationService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class CoreModule { }
