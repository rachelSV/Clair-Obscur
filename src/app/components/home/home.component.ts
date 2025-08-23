import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { HeroBannerComponent } from '../hero-banner/hero-banner.component';
import { InfosUtilesComponent } from '../infos-utiles/infos-utiles.component';
import { ArticlesComponent } from '../articles/articles.component';
import { ArticlesService } from '../articles/articles.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroBannerComponent, InfosUtilesComponent, ArticlesComponent, RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  articlesService = inject(ArticlesService);
}
