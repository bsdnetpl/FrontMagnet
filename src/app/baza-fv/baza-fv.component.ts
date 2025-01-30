import { Component } from '@angular/core';
import { BazaFVService } from '../login/Servis/baza-fv.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';
import { BazaFV } from '../models/baza-fv';



@Component({
  selector: 'app-baza-fv',
  templateUrl: './baza-fv.component.html',
  styleUrls: ['./baza-fv.component.css'],
  imports: [FormsModule,CommonModule],
  standalone: true
})
export class BazaFvComponent {
  year: number = new Date().getFullYear(); // Domyślnie bieżący rok
  month: number = new Date().getMonth() + 1; // Domyślnie bieżący miesiąc
  faktury: BazaFV[] = [];
  loading: boolean = false; // Flaga ładowania

  constructor(private bazaFvService: BazaFVService) {}

  LoadData() {
    if (!this.year || !this.month) {
      alert("Podaj rok i miesiąc!");
      return;
    }

    this.loading = true;
    this.faktury = []; // Czyścimy dane przed nowym zapytaniem

    this.bazaFvService.getAllBazaFVs(this.year, this.month).subscribe({
      next: (data) => {
        console.log("Dane pobrane z API:", data);
        this.faktury = data;
      },
      error: (error) => {
        console.error("Błąd pobierania danych:", error);
        alert("Nie udało się pobrać faktur.");
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
