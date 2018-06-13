import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  imports: [
    CommonModule,
    MenubarModule
  ],
  declarations: [MenuComponent],
  exports: [
    MenuComponent
  ]
})
export class CoreModule { }
