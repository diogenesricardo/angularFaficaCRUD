import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoriaService {

  categoriasURL = 'http://localhost:8080/categorias';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Array<any>>(`${this.categoriasURL}`);
  }

}
