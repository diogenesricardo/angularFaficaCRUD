import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];
  painelCores = false;

  constructor() { }

  ngOnInit() {

    this.items = [
      {
        label: 'Base',
        icon: 'fa-file-o',
        items: [{
          label: 'Cadastro',
          icon: 'fa-plus',
          items: [
            { label: 'Cores' },
          ]
        }
        ]
      },
    ];
  }
}
