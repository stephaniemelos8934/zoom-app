import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialService } from 'src/app/core/services/material.service';

@Component({
  selector: 'app-caderno',
  templateUrl: './caderno.component.html',
  styleUrls: ['./caderno.component.css']
})
export class CadernoComponent implements OnInit {

  nomeCaderno = '';
  conteudo = '';
  id: number;

  constructor(
    private material: MaterialService,
    private router: Router,
    activatedRoute: ActivatedRoute,
  ) { 
    this.id = activatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.material.listarCaderno(this.id).subscribe(
      response => {
        this.nomeCaderno = response[0].nome;
        this.conteudo = response[0].texto;
      }
    );
  }

  atualizar(): void {
    this.material.atualizarCaderno(this.nomeCaderno, this.conteudo, this.id).subscribe(
      _ => {
        this.router.navigate(['../material']);
      }
    );
  }
}
