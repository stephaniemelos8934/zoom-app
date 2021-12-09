import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-membros',
  templateUrl: './adicionar-membros.component.html',
  styleUrls: ['./adicionar-membros.component.css']
})
export class AdicionarMembrosComponent {

  constructor(
    private router: Router
  ) { }

  cancelar(): void {
    this.router.navigate(['../professor']);
  }
}
