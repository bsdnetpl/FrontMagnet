import { Component } from '@angular/core';
import { AuthService } from './Servis/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  token: string = '';

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    if (this.email && this.password) {
      this.authService.authenticate({ email: this.email, password: this.password }).subscribe({
        next: (token: string) => {
          console.log('Zalogowano pomyślnie, token:', token);
          // Zapisz token w sessionStorage
          sessionStorage.setItem('jwtToken', token);
          this.token = token;
          //const decoded = jwt_decode(token);
          //console.log('Decoded payload:', decoded);
        },
        error: (err) => {
          console.error('Błąd logowania:', err);
        }
      });
    } else {
      console.error('Email i hasło są wymagane!');
    }
  }
}
