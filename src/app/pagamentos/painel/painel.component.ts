import { LancamentoFiltro } from './../pagamentos.service';
import { Component, OnInit, Output } from '@angular/core';
import { PagamentosService } from '../pagamentos.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  pagamentos: Array<any>;
  filtro = new LancamentoFiltro();
  totalRegistros = 0;

  constructor(private pagamentosService: PagamentosService) { }

  ngOnInit(): void {
    this.listarPagamentos();
  }

  listarPagamentos(pagina = 0) {
    this.filtro.pagina = pagina;
    this.pagamentosService.consultar(this.filtro).subscribe(
      response => {
        this.pagamentos = response['content'];
        this.totalRegistros = response['totalElements'];
      }
    );
  }


}
