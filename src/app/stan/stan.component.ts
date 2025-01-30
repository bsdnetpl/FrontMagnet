import { Component } from '@angular/core';
import { Stan } from '../models/stan';
import { StanService } from '../login/Servis/stan.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stan',
  imports: [CommonModule],
  templateUrl: './stan.component.html',
  styleUrl: './stan.component.css',
  standalone: true,
})
export class StanComponent {
  stans: Stan[] = []; // Tablica typu Stan
  isLoading = true; // Flaga ładowania danych
  errorMessage = ''; // Komunikat błędu

  constructor(private stanService: StanService) {}

  ngOnInit(): void {
    this.fetchStans();
  }

  fetchStans(): void {
    this.stanService.getAllStans().subscribe({
      next: (data) => {
        this.stans = data; // Przypisanie danych do tablicy
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Błąd podczas pobierania danych.';
        console.error(err);
        this.isLoading = false;
      }
    });
  }
}
