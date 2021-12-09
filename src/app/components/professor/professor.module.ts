import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorComponent } from './professor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfessorRoutingModule } from './professor-routing.module';
import { AdicionarMembrosComponent } from './adicionar-membros/adicionar-membros.component';
import { ListaAlunosComponent } from './lista-alunos/lista-alunos.component';



@NgModule({
  declarations: [
    ProfessorComponent,
    AdicionarMembrosComponent,
    ListaAlunosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProfessorRoutingModule,
  ]
})
export class ProfessorModule { }
