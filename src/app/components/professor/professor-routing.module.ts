import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarMembrosComponent } from './adicionar-membros/adicionar-membros.component';
import { ListaAlunosComponent } from './lista-alunos/lista-alunos.component';
import { ProfessorComponent } from './professor.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ProfessorComponent,
    children: [
      {
        path: 'adicionar-membros/:classeId',
        component: AdicionarMembrosComponent
      },
      {
        path: 'lista-alunos/:classeId',
        component: ListaAlunosComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class ProfessorRoutingModule { }