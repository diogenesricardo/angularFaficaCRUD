import { PagamentosService } from './../pagamentos.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Lancamento } from './../../core/model/Lancamento';
import { PessoasService } from './../../clientes/pessoas.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { CategoriaService } from './../../categorias/categoria.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

import * as moment from 'moment';

@Component({
  selector: 'app-cadastro-pagamentos',
  templateUrl: './cadastro-pagamentos.component.html',
  styleUrls: ['./cadastro-pagamentos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CadastroPagamentosComponent implements OnInit {

  categorias = [];
  pessoas = [];
  lancamento = new Lancamento();
  tipos = [
    { label: 'Entrada', value: 'RECEITA' },
    { label: 'Saída', value: 'DESPESA' }
  ];

  constructor(
    private categoriaService: CategoriaService,
    private errorHanler: ErrorHandlerService,
    private messageService: MessageService,
    private pessoaService: PessoasService,
    private pagamentoService: PagamentosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    /* console.log(this.route.snapshot.params['id']); */
    const codigolancamento = this.route.snapshot.params['id'];
    if (codigolancamento) {
      this.carregarPagamento(codigolancamento);
    }

    this.carregarCategorias();
    this.carregarPessoas();
  }

  get isEditando() {
    return Boolean(this.lancamento.id);
  }

  carregarCategorias() {
    return this.categoriaService.listar().subscribe(
      response => {
        this.categorias = response.map(c => ({ label: c.descricao, value: c.id }));
      }, error => this.errorHanler.handler(error)
    );
  }

  carregarPessoas() {
    return this.pessoaService.listar().subscribe(
      response => {
        this.pessoas = response['content'].map(p => ({ label: p.nome, value: p.id }));
      }, error => this.errorHanler.handler(error)
    );
  }

  salvar(form: FormControl) {
    if (this.isEditando) {
      this.atualizarLancamento(form);
    } else {
      this.adicionarLancamento(form);
    }
  }

  adicionarLancamento(form: FormControl) {
    this.pagamentoService.adicionar(this.lancamento).subscribe(
      response => {
        this.messageService.add({ severity: 'info', summary: 'Sucesso', detail: 'Lancamento efetuado com sucesso' });
        form.reset(); // resetando o formulario
        this.lancamento = new Lancamento(); // limpando o objeto
      }, error => this.errorHanler.handler(error)
    );
  }

  atualizarLancamento(form: FormControl) {
    this.pagamentoService.alterar(this.lancamento).subscribe(
      response => {
        this.lancamento = response;
        this.messageService.add({ severity: 'info', summary: 'Sucesso', detail: 'Lancamento atualizado com sucesso' });
      }, error => this.errorHanler.handler(error)
    );
  }

  carregarPagamento(id: number) {
    this.pagamentoService.listarPagamento(id).subscribe(
      response => {
        this.converterStringsParaDatas([response]);
        this.lancamento = response;
      }, error => this.errorHanler.handler(error)
    );
  }

  private converterStringsParaDatas(lancamentos: Lancamento[]) {
    for (const lancamento of lancamentos) {
      if (lancamento.dataVencimento) {
        lancamento.dataVencimento = moment(lancamento.dataVencimento,
          'YYYY-MM-DD').toDate();
      }
      if (lancamento.dataPagamento) {
        lancamento.dataPagamento = moment(lancamento.dataPagamento,
          'YYYY-MM-DD').toDate();
      }
    }
  }





}
