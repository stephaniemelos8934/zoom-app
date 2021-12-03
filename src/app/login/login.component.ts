import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formRegister: FormGroup;

  formLogin: FormGroup;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private toastr: ToastrService,
    builder: FormBuilder) { 
    this.formRegister = builder.group({
      email: builder.control(undefined, [Validators.required, Validators.email]),
      password: builder.control(undefined, [Validators.required, Validators.minLength(6)]),
      tipo: builder.control(1, [Validators.required]),
      nome: builder.control(undefined, [Validators.required])
    });

    this.formLogin = builder.group({
      email: builder.control(undefined, [Validators.required]),
      password: builder.control(undefined, [Validators.required])
    });
  }

  submitRegister(): void {
    if(!this.formRegister.valid) {
      alert(`
        Formulário com erros. Preencha todos os campos corretamente
      `)
    } else {
      this.accountService.register({
        nome: this.formRegister.value['nome'],
        password: this.formRegister.value['password'],
        tipo: this.getTipo(this.formRegister.value['tipo']),
        email: this.formRegister.value['email']
      }).subscribe(
        success => {
          if(success.response) {

            this.accountService.login({
              password: this.formRegister.value['password'],
              user: this.formRegister.value['email']
            }).subscribe(
              success => {
                if(success.login ?? false) {
                  this.toastr.success('Bem vindo!!!')
                  this.router.navigate(['']);
                }
              }
            );
          }
        },
        error => {
          this.toastr.error('Erro ao realizar registro. Tente novamente mais tarde');
        }
      );
    }
  }

  submitLogin(): void {
    this.accountService.login({
      user: this.formLogin.value['email'],
      password: this.formLogin.value['password']
    }).subscribe(
      _ => {
        this.toastr.success('Bem vindo!!!');
        this.router.navigate(['']);
      },
      error => {
        this.toastr.error('Erro ao realizar login. Tente novamente mais tarde');
      }
    )
  }

  private getTipo(tipo: string): 1 | 2 | 3 {
    switch(tipo) {
      case '1':
        return 1;
      case '2':
        return 2;
      case '3':
        return 3;

      default:
        return 1;
    }
  }

}


type FormularioCadastro = {
  email: string,
  password: string,
  tipo: 1 | 2,
  nome: string
}