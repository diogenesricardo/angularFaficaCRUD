import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PagamentosModule } from './pagamentos/pagamentos.module';
import { ClientesModule } from './clientes/clientes.module';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

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
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
