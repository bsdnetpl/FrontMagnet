import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SprzedazService {
  ApiUrl = 'https://localhost:7273/api/Sprzedaz';
  constructor(private http: HttpClient)
  { }
  loadDataByData(data: string):Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get(this.ApiUrl + '/' + data);
  }
}
