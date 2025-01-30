import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';


export interface AuthRequest {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://localhost:7273/api/User/authenticate';

  constructor(private http: HttpClient) {}
  authenticate(authRequest: AuthRequest): Observable<string> {
    const headers = new HttpHeaders({
      'accept': '*/*',
      'Content-Type': 'application/json'
    });

    return this.http.post(this.apiUrl, authRequest, { headers, responseType: 'text' }).pipe(
      tap((token: string) => {
        if (token) {
          this.setToken(token);
        }
      })
    );
  }

  setToken(token: string): void {
    sessionStorage.setItem('jwtToken', token);
  }

  getToken(): string | null {
    return sessionStorage.getItem('jwtToken');
  }

  removeToken(): void {
    sessionStorage.removeItem('jwtToken');
  }
}
