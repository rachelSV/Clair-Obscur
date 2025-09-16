import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { HeroBannerComponent } from '../hero-banner/hero-banner.component';
import { InfosUtilesComponent } from '../infos-utiles/infos-utiles.component';
import { ArticlesComponent } from '../articles/articles.component';
import { ArticlesService } from '../articles/articles.service';
import { CommonModule } from '@angular/common';
import { LikesButtonComponent } from '../like-button/likes-button.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroBannerComponent, InfosUtilesComponent, ArticlesComponent, RouterLink, CommonModule, LikesButtonComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  articlesService = inject(ArticlesService);
}
