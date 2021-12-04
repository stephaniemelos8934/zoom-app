import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { CadernoComponent } from './components/material/caderno/caderno.component';
import { MaterialComponent } from './components/material/material.component';
import { SalaDeAulaComponent } from './components/sala-de-aula/sala-de-aula.component';
import { ReunioesComponent } from './components/reunioes/reunioes.component';

import 'froala-editor/js/languages/pt_br.js';
import 'froala-editor/js/plugins.pkgd.min.js';
import { LoginComponent } from './components/login/login.component';
import { SiteLayoutComponent } from './components/site-layout/site-layout.component';
import { AccountService } from './core/services/account.service';
import { BaseGuard } from './core/guard/base.guard';
import { ToastrModule } from 'ngx-toastr';
import { ClassesService } from './core/services/classes.service';



@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    HomeComponent,
    SalaDeAulaComponent,
    InfoComponent,
    MaterialComponent,
    CadernoComponent,
    ReunioesComponent,
    LoginComponent,
    SiteLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      autoDismiss: true,
      closeButton: true
    }),
    ReactiveFormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ],
  providers: [
    AccountService,
    BaseGuard,
    ClassesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
