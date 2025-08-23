import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { InfosUtilesComponent } from './components/infos-utiles/infos-utiles.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticlesService } from './components/articles/articles.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroBannerComponent, InfosUtilesComponent, ArticlesComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clair-obscur';

    articlesService = inject(ArticlesService); // 👈 accès direct au service

}
