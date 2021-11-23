import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { CadernoComponent } from './material/caderno/caderno.component';
import { MaterialComponent } from './material/material.component';
import { ReunioesComponent } from './reunioes/reunioes.component';
import { SalaDeAulaComponent } from './sala-de-aula/sala-de-aula.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path: 'info', component: InfoComponent },
  { path: 'reunioes', component: ReunioesComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'material/caderno/:id', component: CadernoComponent},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
