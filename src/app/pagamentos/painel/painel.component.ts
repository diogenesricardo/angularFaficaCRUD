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
  descricao: string;
  dataVencimentoDe: Date;
  dataVencimentoAte: Date;

  constructor(private pagamentosService: PagamentosService) { }

  ngOnInit(): void {
    this.listarPagamentos();
  }

  listarPagamentos() {

    const filtro: LancamentoFiltro {
      descricao: this.descricao,
      dataVencimentoDe: this.dataVencimentoDe,
      dataVencimentoAte: this.dataVencimentoAte
    };

    this.pagamentosService.consultar(filtro).subscribe(
      response => {
        this.pagamentos = response['content'];
      }
    );
  }
}
