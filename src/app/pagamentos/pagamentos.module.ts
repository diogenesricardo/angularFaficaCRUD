import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/components/button/button';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CurrencyMaskModule } from 'ng2-currency-mask';

import { TableComponent } from './table/table.component';
import { PainelComponent } from './painel/painel.component';
import { CadastroPagamentosComponent } from './cadastro-pagamentos/cadastro-pagamentos.component';
import { SharedModule } from '../shared/shared.module';
import { PagamentosService } from './pagamentos.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    ButtonModule,
    InputTextModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    BrowserAnimationsModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule,

    SharedModule
  ],
  declarations: [
    CadastroPagamentosComponent,
    PainelComponent,
    TableComponent
  ],
  providers: [PagamentosService],
  exports: [
    CadastroPagamentosComponent,
    PainelComponent
  ]
})
export class PagamentosModule { }
