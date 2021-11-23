import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { CadernoComponent } from './material/caderno/caderno.component';
import { MaterialComponent } from './material/material.component';
import { SalaDeAulaComponent } from './sala-de-aula/sala-de-aula.component';
import { ReunioesComponent } from './reunioes/reunioes.component';

import 'froala-editor/js/languages/pt_br.js';
import 'froala-editor/js/plugins.pkgd.min.js';



@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    HomeComponent,
    SalaDeAulaComponent,
    InfoComponent,
    MaterialComponent,
    CadernoComponent,
    ReunioesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
