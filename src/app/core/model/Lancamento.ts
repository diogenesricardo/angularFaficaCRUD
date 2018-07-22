import { Pessoa } from './Pessoa';
import { Categoria } from './Categoria';

export class Lancamento {
  id: number;
  tipo = 'RECEITA';
  descricao: string;
  dataVencimento: Date;
  dataPagamento: Date;
  valor: number;
  observacao: string;
  pessoa = new Pessoa();
  categoria = new Categoria();

  public setDescricao(descricao: string) {
    this.descricao =  descricao;
  }
}
