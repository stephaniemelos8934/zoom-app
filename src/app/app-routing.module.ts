import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseGuard } from './core/guard/base.guard';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { LoginComponent } from './components/login/login.component';
import { CadernoComponent } from './components/material/caderno/caderno.component';
import { MaterialComponent } from './components/material/material.component';
import { ReunioesComponent } from './components/reunioes/reunioes.component';
import { SalaDeAulaComponent } from './components/sala-de-aula/sala-de-aula.component';
import { SiteLayoutComponent } from './components/site-layout/site-layout.component';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    canActivate: [BaseGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'info', component: InfoComponent },
      { path: 'reunioes', component: ReunioesComponent },
      { path: 'material', component: MaterialComponent },
      { path: 'material/caderno/:id', component: CadernoComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
