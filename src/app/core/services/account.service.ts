import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginRequest } from '../../core/model/login-request';
import { LoginResponse } from '../../core/model/login-response';
import { RegisterRequest } from '../../core/model/register-request';
import { RegisterResponse } from '../../core/model/register-response';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.backend}/login`, data).pipe(
      filter(response => response.login ?? false),
      tap(response => sessionStorage.setItem('login-info', JSON.stringify({...response, email: data.email})))
    );
  }

  register(data: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${environment.backend}/register`, data);
  }
  

  isLoggedIn(): boolean {
    const loginInfo = JSON.parse(sessionStorage.getItem('login-info')??'{}');
    return  Object.keys(loginInfo).indexOf('login') !== -1;
  }


  logout(): void {
    sessionStorage.removeItem('login-info');
    this.router.navigate(['login']);
  }

  getUserEmail(): string {
    return JSON.parse(sessionStorage.getItem('login-info') ?? '')['email'] ?? '';
  }
}
