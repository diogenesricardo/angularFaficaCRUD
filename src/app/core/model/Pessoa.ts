import { Endereco } from './Endereco';

export class Pessoa {
  id: number;
  nome: string;
  end = new Endereco();
  ativo = true;
}
