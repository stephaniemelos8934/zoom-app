import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { GruposService } from 'src/app/core/services/grupos.service';

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css']
})
export class ListaAlunosComponent implements OnInit {

  classeId = '';
  nomeGrupo = '';

  constructor(
    private routeSnapshot: ActivatedRoute,
    private gruposService: GruposService
  ) { }
  
  
  ngOnInit(): void {
    this.classeId = this.routeSnapshot.snapshot.params['classeId'];
    this.nomeGrupo = this.routeSnapshot.snapshot.queryParams['grupo'];

    this.gruposService.listarMembrosGrupo(this.nomeGrupo, this.classeId).subscribe(
      success => {
        console.log(success);
      }
    );
  }

}
