import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(
    private http: HttpClient,
    private account: AccountService
  ) { }

  listarCaderno(id?: number): Observable<any> {
    let params: any = {
      email: this.account.getUserEmail()
    };

    if(id) {
      params = {...params, id };
    }
    
    return this.http.get(environment.backend + '/cadernos', {
      params
    });
  }

  criarCaderno(nome: string, texto: string): Observable<any> {
    return this.http.post(environment.backend + '/cadernos', {
      email: this.account.getUserEmail(),
      nome,
      texto
    });
  }

  atualizarCaderno(nome: string, texto: string, id: number): Observable<any> {
    return this.http.put(environment.backend + '/cadernos', {
      email: this.account.getUserEmail(),
      nome,
      texto,
      id
    });
  }

  excluirCaderno(id: number): Observable<any> {
    return this.http.delete(environment.backend + '/cadernos', {
      params: {
        id,
        email: this.account.getUserEmail()
      }
    });
  }

}
