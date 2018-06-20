import { PagamentosService, LancamentoFiltro } from './../pagamentos.service';
import { Component, OnInit, Input } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() pagamentos: Array<any>;
  @Input() filtro = new LancamentoFiltro();
  totalRegistros = 0;

  constructor(private pagamentosService: PagamentosService) { }

  proximaPagina(event: LazyLoadEvent) {
    this.filtro.pagina = event.first / event.rows;
    this.pagamentosService.consultar(this.filtro).subscribe(
      response => {
        this.pagamentos = response['content'];
        this.totalRegistros = response['totalElements'];
      }
    );

  }

}
