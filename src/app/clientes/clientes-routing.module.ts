import { NgModule } from '../../../node_modules/@angular/core';
import { Routes } from '../../../node_modules/@angular/router';
import { RouterModule } from '../../../node_modules/@angular/router';

import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { PainelPessoasComponent } from './painel-pessoas/painel-pessoas.component';

const routes: Routes = [
  { path: 'clientes', component: PainelPessoasComponent },
  { path: 'clientes/novo', component: CadastroClientesComponent },
  { path: 'clientes/:id', component: CadastroClientesComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
