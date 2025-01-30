import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BazaFV } from '../models/baza-fv';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BazaFVService {
  apiUrl = 'https://localhost:7273/api/BazaFv/rok-miesiac';

  constructor(private http: HttpClient) { }

  // Pobierz wszystkie dane
  getAllBazaFVs(year: number, month: number): Observable<BazaFV[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.get<BazaFV[]>(`${this.apiUrl}/${year}/${month}`, { headers });
  }
}