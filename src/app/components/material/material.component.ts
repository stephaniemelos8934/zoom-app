import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {

  cadernoMock = [
    {
      id: 1,
      nome: 'Caderno Usabilidade: Mean 1 - Angular'
    },
    {
      id: 2,
      nome: 'Caderno Usabilidade: Mean 2 - Angular'
    },
    {
      id: 2,
      nome: 'Caderno Usabilidade: Mean 3 - Angular'
    }
  ]

  novoCadernoNome: string | undefined;
  constructor(
    private router: Router
  ) { }



  novoCaderno(): void {
    this.cadernoMock.push({
      nome: this.novoCadernoNome ?? '',
      id: this.cadernoMock[this.cadernoMock.length - 1].id + 1
    });

    this.novoCadernoNome = undefined;
  }

  editarCaderno(id: number) {
    this.router.navigate(['material','caderno', id]);
  }

}
