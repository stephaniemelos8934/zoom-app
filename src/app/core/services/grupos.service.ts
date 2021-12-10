import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ErrorResponse } from '../model/error-response';
import { ListarGruposResponse } from '../model/listar-grupos-response';
import { MembrosGruposResponse } from '../model/membros-grupo-response';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root',
})
export class GruposService {
  constructor(private http: HttpClient, private account: AccountService) {}

  listarMembrosGrupo(nomeGrupo: string, idGrupo: string): Observable<any> {
    return this.http.post<any>(environment.backend + '/listgroupmemebers', {
      name: nomeGrupo,
      group_id: idGrupo
    });
    
  }

  criarGrupo(nomeGrupo: string): Observable<{ response: string } | ErrorResponse> {
    return this.http.post<{ response: string } | ErrorResponse>(environment.backend + '/creategroup', {
      name: nomeGrupo,
      admin_email: this.account.getUserEmail(),
    });
  }

  listarGrupos(): Observable<ListarGruposResponse[]> {
    return this.http.post<{response: string, data: ListarGruposResponse[] }>(environment.backend + '/getgroupmembers', {
      email: this.account.getUserEmail()
    }).pipe(
      map(result => result.data)
    );
  }

  adicionarMembro(grupoId: string, email: string): Observable<{response: string} | ErrorResponse> {
    return this.http.post<{response: string} | ErrorResponse>(environment.backend + '/addgroupmember', {
      group_id: grupoId,
      email
    });
  }
}
