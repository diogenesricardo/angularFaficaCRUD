import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/components/common/messageservice';

import { PessoasService } from './../pessoas.service';
import { Pessoa } from '../../core/model/Pessoa';
import { ErrorHandlerService } from '../../core/error-handler.service';

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
    private messageService: MessageService
  ) { }

  ngOnInit() {
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

}
