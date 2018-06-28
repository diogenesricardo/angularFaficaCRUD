import { Component, OnInit } from '@angular/core';
import { PessoaFiltro, PessoasService } from '../pessoas.service';

@Component({
  selector: 'app-painel-pessoas',
  templateUrl: './painel-pessoas.component.html',
  styleUrls: ['./painel-pessoas.component.css']
})
export class PainelPessoasComponent implements OnInit {

  pessoas: Array<any>;
  filtro = new PessoaFiltro();
  totalRegistros = 0;

  constructor(private pessoaService: PessoasService) { }

  listarPessoas(pagina = 0) {
    this.filtro.pagina = pagina;
    this.pessoaService.consultar(this.filtro).subscribe(
      response => {
        this.pessoas = response['content'];
        console.log(this.pessoas);
        this.totalRegistros = response['totalElements'];
      }
    );
  }

  ngOnInit() {
  }

}
