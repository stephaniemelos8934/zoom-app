import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
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
import { LoginComponent } from './login/login.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { AccountService } from './services/account.service';
import { BaseGuard } from './guard/base.guard';
import { ToastrModule } from 'ngx-toastr';



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
    BaseGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
