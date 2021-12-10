import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialService } from 'src/app/core/services/material.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

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
  ];

  novoCadernoNome: string | undefined;
  constructor(
    private router: Router,
    private material: MaterialService
  ) { }

  ngOnInit(): void {
    this.material.listarCaderno().subscribe(
      success => {
        this.cadernoMock = success;
      }
    );
  }

  listarCadernos(): void {
    this.material.listarCaderno().subscribe(
      success => {
        this.cadernoMock = success;
      }
    );
  }

  novoCaderno(): void {
    this.material.criarCaderno(this.novoCadernoNome ?? 'Novo Caderno', 'Hello').subscribe(
      _ => {
        this.novoCadernoNome = undefined;
        this.listarCadernos();
      }
    );

  }

  excluirCaderno(id: number) {
    this.material.excluirCaderno(id).subscribe(
      _ => {
        this.listarCadernos();
      }
    );
  }

  editarCaderno(id: number) {
    this.router.navigate(['material','caderno', id]);
  }

}
