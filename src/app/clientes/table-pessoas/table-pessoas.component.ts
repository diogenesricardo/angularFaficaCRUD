import { Component, OnInit, Input } from '@angular/core';
import { LazyLoadEvent, ConfirmationService } from 'primeng/api';
import { PessoaFiltro, PessoasService } from '../pessoas.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { ErrorHandlerService } from '../../core/error-handler.service';

@Component({
  selector: 'app-table-pessoas',
  templateUrl: './table-pessoas.component.html',
  styleUrls: ['./table-pessoas.component.css']
})
export class TablePessoasComponent {

  @Input() pessoas: Array<any>;
  @Input() filtro = new PessoaFiltro();
  totalRegistros = 0;

  constructor(
    private pessoaService: PessoasService,
    private confirmationService: ConfirmationService ,
    private messageService: MessageService,
    private errorHanler: ErrorHandlerService
  ) { }

  proximaPagina(event: LazyLoadEvent) {
    this.filtro.pagina = event.first / event.rows;
    this.pessoaService.consultar(this.filtro).subscribe(
      response => {
        this.pessoas = response['content'];
        console.log(this.pessoas);
        this.totalRegistros = response['totalElements'];
      }
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

  excluir(pessoa: any) {
    this.pessoaService.excluir(pessoa.id).subscribe(
      response => {
        this.listarPessoas(this.filtro.pagina);
        this.messageService.add({severity: 'info', summary: 'Atualização', detail: 'Pessoa excluída com sucesso'});
      }, error => this.errorHanler.handler(error)
    );
  }

  listarPessoas(pagina = 0) {
    this.filtro.pagina = pagina;
    this.pessoaService.consultar(this.filtro).subscribe(
      response => {
        this.pessoas = response['content'];
        this.totalRegistros = response['totalElements'];
      }, error => this.errorHanler.handler(error)
    );
  }

  ativarPessoa(pessoa: any) {
    this.pessoaService.ativar(pessoa).subscribe(
      response => {
        this.listarPessoas(this.filtro.pagina);
        let status = 'ativada';
        if (pessoa.ativo === true) {
          status = 'desativada';
        }
        this.messageService.add({severity: 'info', summary: 'Ativação', detail: 'Pessoa ' + status});
      } , error => this.errorHanler.handler(error)
    );
  }


}
