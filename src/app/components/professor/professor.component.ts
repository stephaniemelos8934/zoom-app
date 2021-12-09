import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListarGruposResponse } from 'src/app/core/model/listar-grupos-response';
import { GruposService } from 'src/app/core/services/grupos.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css'],
})
export class ProfessorComponent implements OnInit {
  
  criarClasseForm: FormGroup;
  classes?: ListarGruposResponse[];
  
  constructor(
    private gruposService: GruposService,
    builder: FormBuilder
  ) {
    this.criarClasseForm = builder.group({
      nome: builder.control(undefined, [Validators.required]),
    });
  }
  ngOnInit(): void {
    this.listarGrupos();
  }

  listarGrupos(): void {
    this.gruposService.listarGrupos().subscribe(
      success => {
        this.classes = success;
      }
    );
  }


  submit(): void {
    console.log('criar nova classe submitted');
    if(!this.criarClasseForm.valid) {
      alert('Por favor preencha ambos os campos para criar uma nova classe');
      return;
    }

    this.gruposService.criarGrupo(this.criarClasseForm.value['nome'])
      .subscribe(
        _ => {
          this.criarClasseForm.reset();
          setTimeout(() => {
            this.listarGrupos();
          }, 2000);
        }
      );
  }
}
