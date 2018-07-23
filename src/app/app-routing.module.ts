import { NgModule } from '../../node_modules/@angular/core';
import { RouterModule, Routes } from '../../node_modules/@angular/router';

import { NaoEncontradaComponent } from './core/nao-encontrada.component';

const routes: Routes = [
  { path: '', redirectTo: 'pagamentos', pathMatch: 'full' },
  { path: 'pagina-nao-encontrada', component: NaoEncontradaComponent },
  { path: '**', component: NaoEncontradaComponent }
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
