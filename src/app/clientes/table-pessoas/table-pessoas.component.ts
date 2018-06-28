import { Component, OnInit, Input } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { PessoaFiltro, PessoasService } from '../pessoas.service';

@Component({
  selector: 'app-table-pessoas',
  templateUrl: './table-pessoas.component.html',
  styleUrls: ['./table-pessoas.component.css']
})
export class TablePessoasComponent {

  @Input() pessoas: Array<any>;
  @Input() filtro = new PessoaFiltro();
  totalRegistros = 0;

  constructor(private pessoaService: PessoasService) { }

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
}
