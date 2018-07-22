import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PagamentosModule } from './pagamentos/pagamentos.module';
import { ClientesModule } from './clientes/clientes.module';

import { NaoEncontradaComponent } from './core/nao-encontrada.component';
import { PainelComponent } from './pagamentos/painel/painel.component';
import { CadastroPagamentosComponent } from './pagamentos/cadastro-pagamentos/cadastro-pagamentos.component';
import { CadastroClientesComponent } from './clientes/cadastro-clientes/cadastro-clientes.component';
import { PainelPessoasComponent } from './clientes/painel-pessoas/painel-pessoas.component';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

// E por fim, registre o localePt como 'pt-BR'
registerLocaleData(localePt, 'pt-BR');

const routes: Routes = [
  { path: '', redirectTo: 'pagamentos', pathMatch: 'full' },
  { path: 'pagamentos', component: PainelComponent },
  { path: 'pagamentos/novo', component: CadastroPagamentosComponent },
  { path: 'pagamentos/:id', component: CadastroPagamentosComponent },
  { path: 'clientes', component: PainelPessoasComponent },
  { path: 'clientes/novo', component: CadastroClientesComponent },
  { path: 'clientes/:id', component: CadastroClientesComponent },
  { path: 'pagina-nao-encontrada', component: NaoEncontradaComponent },
  { path: '**', component: NaoEncontradaComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),


    ClientesModule,
    CoreModule,
    PagamentosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
