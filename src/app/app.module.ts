import { PagamentosService } from './pagamentos/pagamentos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GrowlModule } from 'primeng/growl';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PagamentosModule } from './pagamentos/pagamentos.module';
import { ClientesModule } from './clientes/clientes.module';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

// E por fim, registre o localePt como 'pt-BR'
registerLocaleData(localePt, 'pt-BR');


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    ClientesModule,
    CoreModule,
    PagamentosModule,
    GrowlModule,
    ConfirmDialogModule
  ],
  providers: [ConfirmationService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
