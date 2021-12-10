import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GruposService } from 'src/app/core/services/grupos.service';

@Component({
  selector: 'app-adicionar-membros',
  templateUrl: './adicionar-membros.component.html',
  styleUrls: ['./adicionar-membros.component.css']
})
export class AdicionarMembrosComponent implements OnInit {
  classeId: any;
  nomeGrupo: any;

  emailNovoMembro?: string;

  constructor(
    private router: Router,
    private routeSnapshot: ActivatedRoute,
    private gruposService: GruposService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.classeId = this.routeSnapshot.snapshot.params['classeId'];
    this.nomeGrupo = this.routeSnapshot.snapshot.queryParams['grupo'];

  }

  submit(): void {
    if(!this.emailNovoMembro) {
      console.log('Por favor preencha o campo com um email válido');
    } else {
      this.gruposService.adicionarMembro(this.classeId, this.emailNovoMembro).subscribe(
        _ => {
          this.toastr.success('Membro adicionado com sucesso!');
          this.emailNovoMembro = undefined;
          this.cancelar();
        }
      );


    }

  }
  

  cancelar(): void {
    this.router.navigate(['../professor']);
  }
}
