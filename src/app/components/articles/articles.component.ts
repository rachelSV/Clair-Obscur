import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArticlesService } from './articles.service';
import { LikesButtonComponent } from '../like-button/likes-button.component';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, RouterLink, LikesButtonComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {
  private articlesService = inject(ArticlesService);

  articles = this.articlesService.getAll();
}
