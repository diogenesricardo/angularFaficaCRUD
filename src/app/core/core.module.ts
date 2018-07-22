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
import { NaoEncontradaComponent } from './nao-encontrada.component';
import { Title } from '../../../node_modules/@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    MenubarModule,
    RouterModule,

    GrowlModule,
    ConfirmDialogModule
  ],
  declarations: [MenuComponent, UtilsComponent, NaoEncontradaComponent],
  exports: [
    MenuComponent, UtilsComponent
  ],
  providers: [
    ErrorHandlerService,
    ConfirmationService,
    Title,

    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class CoreModule { }
