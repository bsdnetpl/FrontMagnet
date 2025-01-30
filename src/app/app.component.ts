import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { StanComponent } from "./stan/stan.component";
import { SprzedazComponent } from "./sprzedaz/sprzedaz.component";
import { BazaFvComponent } from "./baza-fv/baza-fv.component";

@Component({
  selector: 'app-root',
  imports: [LoginComponent, StanComponent, SprzedazComponent, BazaFvComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MagnetFront';
}
