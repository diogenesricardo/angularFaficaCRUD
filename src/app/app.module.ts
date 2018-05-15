import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';

import { PainelComponent } from './painel/painel.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PainelComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
