import { PagamentosService } from './../pagamentos.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Lancamento } from './../../core/model/Lancamento';
import { PessoasService } from './../../clientes/pessoas.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { CategoriaService } from './../../categorias/categoria.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-cadastro-pagamentos',
  templateUrl: './cadastro-pagamentos.component.html',
  styleUrls: ['./cadastro-pagamentos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CadastroPagamentosComponent implements OnInit {

  constructor (
    private categoriaService: CategoriaService,
    private errorHanler: ErrorHandlerService,
    private pessoaService: PessoasService,
    private pagamentoService: PagamentosService,
    private messageService: MessageService
  ) { }

  tipos = [
    { label: 'Entrada', value: 'RECEITA' },
    { label: 'Saída', value: 'DESPESA' }
  ];

  categorias = [];
  pessoas = [];
  lancamento = new Lancamento();

  ngOnInit() {
    this.carregarCategorias();
    this.carregarPessoas();
  }

  carregarCategorias() {
    return this.categoriaService.listar().subscribe(
      response => {
        this.categorias = response.map(c => ({label: c.descricao, value: c.id}));
      }, error => this.errorHanler.handler(error)
    );
  }

  carregarPessoas() {
    return this.pessoaService.listar().subscribe(
      response => {
        this.pessoas = response['content'].map(p => ({label: p.nome, value: p.id}));
      }, error => this.errorHanler.handler(error)
    );
  }

  salvar(form: FormControl) {
    this.pagamentoService.adicionar(this.lancamento).subscribe(
      response => {
        this.messageService.add({severity: 'info', summary: 'Sucesso', detail: 'Lancamento efetuado com sucesso'});
        form.reset(); // resetando o formulario
        this.lancamento = new Lancamento(); // limpando o objeto
      }, error => this.errorHanler.handler(error)
    );


  }






}
