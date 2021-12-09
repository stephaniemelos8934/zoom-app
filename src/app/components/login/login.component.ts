import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/core/services/account.service';

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
      `);
    } else {
      this.accountService.register({
        nome: this.formRegister.value['nome'],
        password: this.formRegister.value['password'],
        tipo: this.getTipo(this.formRegister.value['tipo']),
        email: this.formRegister.value['email']
      }).subscribe(
        success => {
          if(success.login) {

            this.accountService.login({
              password: this.formRegister.value['password'],
              email: this.formRegister.value['email']
            }).subscribe(
              success => {
                if(success.login ?? false) {
                  this.toastr.success('Bem vindo!!!');
                  this.router.navigate(['']);
                }
              }
            );
          }
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        _ => {
          this.toastr.error('Erro ao realizar registro. Tente novamente mais tarde');
        }
      );
    }
  }

  submitLogin(): void {
    this.accountService.login({
      email: this.formLogin.value['email'],
      password: this.formLogin.value['password']
    }).subscribe(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      _ => {
        this.toastr.success('Bem vindo!!!');
        this.router.navigate(['']);
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      _ => {
        this.toastr.error('Erro ao realizar login. Tente novamente mais tarde');
      }
    );
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

