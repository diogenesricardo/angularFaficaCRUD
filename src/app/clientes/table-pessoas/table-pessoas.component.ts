import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-pessoas',
  templateUrl: './table-pessoas.component.html',
  styleUrls: ['./table-pessoas.component.css']
})
export class TablePessoasComponent {

  pessoas = [
    { nome: 'Diógenes Ricardo', cidade: 'Caruaru', estado: 'PE', ativo: true },
    { nome: 'Alef Douglas', cidade: 'Recife', estado: 'PE', ativo: false },
    { nome: 'Almir Antonio', cidade: 'Agrestina', estado: 'PE', ativo: true },
    { nome: 'Amanda Maria', cidade: 'Jataúba', estado: 'PB', ativo: true },
    { nome: 'Daniel Gustavo', cidade: 'Caruaru', estado: 'PE', ativo: false },
    { nome: 'Joice Danilele', cidade: 'Caruaru', estado: 'PE', ativo: true }
  ];
}
