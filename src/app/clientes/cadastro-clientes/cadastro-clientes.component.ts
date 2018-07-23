import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/components/common/messageservice';

import { PessoasService } from './../pessoas.service';
import { Pessoa } from '../../core/model/Pessoa';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { Title } from '../../../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {

  pessoa = new Pessoa();

  constructor(
    private pessoaService: PessoasService,
    private errorHanler: ErrorHandlerService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Cadastro de Clientes');
    const pessoaID = this.route.snapshot.params['id'];
    if (pessoaID) {
      this.title.setTitle('Editar cliente');
      this.carregarPessoa(pessoaID);
    }
  }

  get isEditando() {
    return Boolean(this.pessoa.id);
  }

  salvar(form: FormControl) {
    console.log(this.pessoa);
    this.pessoaService.adicionar(this.pessoa).subscribe(
      response => {
        this.messageService.add({severity: 'info', summary: 'Sucesso', detail: 'Pessoa cadastrada com sucesso'});
        form.reset(); // resetando o formulario
        this.pessoa = new Pessoa(); // limpando o objeto
      }, error => this.errorHanler.handler(error)
    );
  }

  carregarPessoa(id: number) {
    this.pessoaService.listarPessoa(id).subscribe(
      response => {
        this.pessoa = response;
      }, error => this.errorHanler.handler(error)
    );
  }



}
