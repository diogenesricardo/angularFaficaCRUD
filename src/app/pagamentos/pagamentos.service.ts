import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import * as moment from 'moment';
export class LancamentoFiltro {
  descricao: string;
  dataVencimentoDe: Date;
  dataVencimentoAte: Date;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable()
export class PagamentosService {

  pagamentosURL = 'http://localhost:8080/lancamentos';
  parameters:  HttpParams;

  constructor(private http: HttpClient) { }

  consultar(filtro: LancamentoFiltro) {
    this.parameters = new HttpParams();
    console.log(moment(filtro.dataVencimentoDe).format('YYYY-MM-DD') + filtro.descricao + filtro.dataVencimentoAte);
    if (filtro.descricao) { // todo: PROBLEMA DO UNDEFINED
      this.parameters = this.parameters.set('descricao', filtro.descricao);
    }
    if (filtro.dataVencimentoDe) {
      this.parameters = this.parameters.set('dataVencimentoDe', moment(filtro.dataVencimentoDe).format('YYYY-MM-DD'));
    }
    if (filtro.dataVencimentoAte) {
      this.parameters = this.parameters.set('dataVencimentoAte', moment(filtro.dataVencimentoAte).format('YYYY-MM-DD'));
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

    return this.http.get<Array<any>>(`${this.pagamentosURL}?resumo`, httpOptions);
  }

  /*   adicionar(nome: any): Observable<any> {
      return this.http.post('http://localhost:8080/pessoas', nome);
    }

    excluir(id: number) {
      return this.http.delete(`http://localhost:8080/pessoas/${id}`);
    }

    alterar(funcionario: any): Observable<any> {
      return this.http.put(`http://localhost:8080/pessoas/${funcionario.id}`, funcionario);
    }
  */
}
