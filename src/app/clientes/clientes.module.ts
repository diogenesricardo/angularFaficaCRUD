import { TablePessoasComponent } from './table-pessoas/table-pessoas.component';
import { PainelPessoasComponent } from './painel-pessoas/painel-pessoas.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  imports: [
    CommonModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    BrowserAnimationsModule,
    SelectButtonModule,
    DropdownModule,
    InputMaskModule
  ],
  declarations: [
    CadastroClientesComponent,
    PainelPessoasComponent,
    TablePessoasComponent
  ],
  exports: [
    CadastroClientesComponent,
    PainelPessoasComponent
  ]
})
export class ClientesModule { }
