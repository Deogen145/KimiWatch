import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  animes: any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  getData() { // ?page=${page}
    this.http.get<any>(`https://api.jikan.moe/v4/top/anime`)
      .subscribe({
        next: (Response) => {
          this.animes = Response.data;
          console.log(this.animes)
        },
        error: (err) => {
          console.error(err)
        }
      })
  }
}
