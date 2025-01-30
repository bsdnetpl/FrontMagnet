import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Stan } from '../models/stan'; // Import interfejsu
@Injectable({
  providedIn: 'root'
})
export class StanService {

  private apiUrl = 'https://localhost:7273/api/Stan'; // Adres API

  constructor(private http: HttpClient) {}

  // Pobierz wszystkie dane
  getAllStans(): Observable<Stan[]> {
    return this.http.get<Stan[]>(this.apiUrl);
  }
}
