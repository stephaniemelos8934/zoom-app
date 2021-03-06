import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClasseResponse } from '../model/classe-response';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(
    private http: HttpClient
  ) { }


  getClass(idProf: string, idClass: string): Observable<ClasseResponse> {
    return this.http.get<ClasseResponse>(`${environment.backend}/getclass`, {
      params: {
        idUser: idProf,
        idClass: idClass
      }
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getAllClasses(idProf: string) {
    //
  }
}
