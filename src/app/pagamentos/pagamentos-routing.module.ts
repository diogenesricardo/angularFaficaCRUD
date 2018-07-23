import { PainelComponent } from '.././pagamentos/painel/painel.component';
import { CadastroPagamentosComponent } from '.././pagamentos/cadastro-pagamentos/cadastro-pagamentos.component';
import { NgModule } from '../../../node_modules/@angular/core';
import { Routes } from '../../../node_modules/@angular/router';
import { RouterModule } from '../../../node_modules/@angular/router';

const routes: Routes = [
  { path: 'pagamentos', component: PainelComponent },
  { path: 'pagamentos/novo', component: CadastroPagamentosComponent },
  { path: 'pagamentos/:id', component: CadastroPagamentosComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagamentosRoutingModule { }
