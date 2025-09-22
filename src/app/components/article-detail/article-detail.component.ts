import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ArticlesService } from '../articles/articles.service';
import { ArticleRendererComponent } from '../articles/article-renderer/article-renderer.component';
import { LikesButtonComponent } from '../like-button/likes-button.component';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, ArticleRendererComponent, LikesButtonComponent],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css'
})
export class ArticleDetailComponent {
  private route = inject(ActivatedRoute);
  private articlesService = inject(ArticlesService);

  article: any = null;

  constructor() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.article = this.articlesService.getById(id);
      }
    });
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
