import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cadastro-pagamentos',
  templateUrl: './cadastro-pagamentos.component.html',
  styleUrls: ['./cadastro-pagamentos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CadastroPagamentosComponent implements OnInit {

  tipos = [
    { label: 'Entrada', value: 'entrada' },
    { label: 'Saída', value: 'saida' }
  ];

  categorias = [
    { label: 'Alimentação', value: 1 },
    { label: 'Transporte', value: 2 },
  ];

  pessoas = [
    { label: 'João da Silva', value: 4 },
    { label: 'Sebastião Souza', value: 9 },
    { label: 'Maria Abadia', value: 3 },
  ];

  constructor() { }

  ngOnInit() {
  }





}
