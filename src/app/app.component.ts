import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'KimiWatch';
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const light = document.querySelector('.mouse-light') as HTMLElement;
    if (light) {
      light.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    }
  }
}
