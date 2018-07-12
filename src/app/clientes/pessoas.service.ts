import { Pessoa } from './../core/model/Pessoa';
import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';

import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
export class PessoaFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable()
export class PessoasService {

  pessoasURL = 'http://localhost:8080/pessoas';
  parameters:  HttpParams;

  constructor(private http: HttpClient) { }

  consultar(filtro: PessoaFiltro) {
    this.parameters = new HttpParams();
    if (filtro.nome) { // todo: PROBLEMA DO UNDEFINED
      this.parameters = this.parameters.set('nome', filtro.nome);
    }
    this.parameters = this.parameters.set('page', filtro.pagina.toString());
    this.parameters = this.parameters.set('size', filtro.itensPorPagina.toString());
    /* this.parameters.set('descricao', filtro.descricao); */

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic YWRtaW46YWRtaW4='
      }),
      params: this.parameters /* new HttpParams().set('descricao', filtro.descricao) */
      /* de: filtro.dataVencimentoDe ? new HttpParams().set('dataVencimentoDe',
        moment(filtro.dataVencimentoDe).format('YYYY-MM-DD')) : {} */
    };
    return this.http.get<Array<any>>(`${this.pessoasURL}`, httpOptions);
  }

  excluir(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic YWRtaW46YWRtaW4='
      }),
      params: this.parameters
    };
    return this.http.delete(`${this.pessoasURL}/${id}`, httpOptions);
  }

  ativar(pessoa: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic YWRtaW46YWRtaW4=',
        'Content-Type': 'application/json'
      })
    };
    let ativo = true;
    if (pessoa.ativo === true) {
      ativo = false;
    }
    return this.http.put(`${this.pessoasURL}/${pessoa.id}/ativo`, ativo , httpOptions);
  }

  listar() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic YWRtaW46YWRtaW4='
      })
    };
    return this.http.get<Array<any>>(`${this.pessoasURL}`, httpOptions);
  }

  adicionar(pessoa: Pessoa): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic YWRtaW46YWRtaW4=',
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Pessoa>(this.pessoasURL, pessoa, httpOptions);
  }

  /*

    excluir(id: number) {
      return this.http.delete(`http://localhost:8080/pessoas/${id}`);
    }

    alterar(funcionario: any): Observable<any> {
      return this.http.put(`http://localhost:8080/pessoas/${funcionario.id}`, funcionario);
    }
  */
}
