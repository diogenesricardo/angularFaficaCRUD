import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface LancamentoFiltro {
  descricao: string;
  dataVencimentoDe: Date;
  dataVencimentoAte: Date;
}

@Injectable()
export class PagamentosService {

  pagamentosURL = 'http://localhost:8080/lancamentos';

  constructor(private http: HttpClient) { }

  consultar(filtro: LancamentoFiltro) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic YWRtaW46YWRtaW4='
      }),
      params: filtro.descricao ? new HttpParams().set('descricao', filtro.descricao) : {}
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
