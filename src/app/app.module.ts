import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PainelComponent } from './painel/painel.component';
import { TableComponent } from './table/table.component';
import { PainelPessoasComponent } from './painel-pessoas/painel-pessoas.component';
import { TablePessoasComponent } from './table-pessoas/table-pessoas.component';
import { CadastroPagamentosComponent } from './cadastro-pagamentos/cadastro-pagamentos.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { InputMaskModule } from 'primeng/inputmask';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

import { MessageAlertComponent } from './message-alert/message-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PainelComponent,
    TableComponent,
    PainelPessoasComponent,
    TablePessoasComponent,
    CadastroPagamentosComponent,
    CadastroClientesComponent,
    MessageAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    MenubarModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    BrowserAnimationsModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule,
    InputMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
