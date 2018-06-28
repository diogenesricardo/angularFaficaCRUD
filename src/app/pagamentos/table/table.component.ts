import { PagamentosService, LancamentoFiltro } from './../pagamentos.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { LazyLoadEvent, Message } from 'primeng/api';

import { MessageService } from 'primeng/components/common/messageservice';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() pagamentos: Array<any>;
  @Input() filtro = new LancamentoFiltro();
  totalRegistros = 0;
  @ViewChild('tabelaPagamentos') tabelaLancamentos;

  constructor(private pagamentosService: PagamentosService, private messageService: MessageService) { }

  proximaPagina(event: LazyLoadEvent) {
    this.filtro.pagina = event.first / event.rows;
    this.pagamentosService.consultar(this.filtro).subscribe(
      response => {
        this.pagamentos = response['content'];
        this.totalRegistros = response['totalElements'];
      }
    );
  }

  excluir(lancamento: any) {
    this.pagamentosService.excluir(lancamento.id).subscribe(
      response => {
        console.log('excluido');
        this.listarPagamentos(this.filtro.pagina);
        this.messageService.add({severity: 'info', summary: 'Atualização', detail: 'Lançamento excluído com sucesso'});
      }
    );
  }

  listarPagamentos(pagina = 0) {
    this.filtro.pagina = pagina;
    this.pagamentosService.consultar(this.filtro).subscribe(
      response => {
        this.pagamentos = response['content'];
        this.totalRegistros = response['totalElements'];
      }
    );
  }

}
