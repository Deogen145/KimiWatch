import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MainComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'KimiWatch';
}
