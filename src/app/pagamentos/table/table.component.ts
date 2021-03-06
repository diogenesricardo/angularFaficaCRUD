import { PagamentosService, LancamentoFiltro } from './../pagamentos.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { LazyLoadEvent, Message, ConfirmationService } from 'primeng/api';

import { MessageService } from 'primeng/components/common/messageservice';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { Title } from '../../../../node_modules/@angular/platform-browser';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() pagamentos: Array<any>;
  @Input() filtro = new LancamentoFiltro();
  totalRegistros = 0;
  @ViewChild('tabelaPagamentos') tabelaLancamentos;

  constructor(private pagamentosService: PagamentosService,
    private confirmationService: ConfirmationService ,
    private messageService: MessageService,
    private errorHanler: ErrorHandlerService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Pesquisa de Pagamentos');

  }

  proximaPagina(event: LazyLoadEvent) {
    this.filtro.pagina = event.first / event.rows;
    this.pagamentosService.consultar(this.filtro).subscribe(
      response => {
        this.pagamentos = response['content'];
        this.totalRegistros = response['totalElements'];
      }, error => this.errorHanler.handler(error)
    );
  }

  confirmarExclusao(lancamento: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
          this.excluir(lancamento);
      }
  });
  }

  excluir(lancamento: any) {
    this.pagamentosService.excluir(lancamento.id).subscribe(
      response => {
        this.listarPagamentos(this.filtro.pagina);
        this.messageService.add({severity: 'info', summary: 'Atualização', detail: 'Lançamento excluído com sucesso'});
      }, error => this.errorHanler.handler(error)
    );
  }

  listarPagamentos(pagina = 0) {
    this.filtro.pagina = pagina;
    this.pagamentosService.consultar(this.filtro).subscribe(
      response => {
        this.pagamentos = response['content'];
        this.totalRegistros = response['totalElements'];
      }, error => this.errorHanler.handler(error)
    );
  }

}
