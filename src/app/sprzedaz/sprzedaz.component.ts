import { Component } from '@angular/core';
import { SprzedazService } from '../login/Servis/sprzedaz.service';
import { CommonModule } from '@angular/common';
import { Sprzedaz } from '../models/sprzedaz';

@Component({
  selector: 'app-sprzedaz',
  imports: [CommonModule],
  templateUrl: './sprzedaz.component.html',
  styleUrl: './sprzedaz.component.css',
  standalone: true
})
export class SprzedazComponent {
 sprzedaz:Sprzedaz[] = []; 
constructor(private sprzedazService: SprzedazService) {}
loadData(data: string) {
  console.log(`Pobieranie danych dla daty: ${data}`); // 🔍 Logowanie

  this.sprzedazService.loadDataByData(data).subscribe({
    next: (response) => {
      console.log('Dane z API:', response); // 🔍 Logowanie
      this.sprzedaz = response;
      console.log('Dane w komponencie:', this.sprzedaz);
    },
    error: (err) => {
      console.error('Błąd pobierania danych:', err);
    }
  });
}
}
