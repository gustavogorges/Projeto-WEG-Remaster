import { Component } from '@angular/core';

@Component({
  selector: 'app-tela-projetos',
  templateUrl: './tela-projetos.component.html',
  styleUrls: ['./tela-projetos.component.scss']
})
export class TelaProjetosComponent {
  isSidebarOpen: boolean = false;

  constructor() {
  }
}
