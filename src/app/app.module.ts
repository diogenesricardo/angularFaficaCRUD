import { PagamentosService } from './pagamentos/pagamentos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {GrowlModule} from 'primeng/growl';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PagamentosModule } from './pagamentos/pagamentos.module';
import { ClientesModule } from './clientes/clientes.module';

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
    GrowlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
