import { Component, Input } from '@angular/core';
import { ArticleBlock, InlineSegment } from '../models/article.model';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-article-renderer',
  standalone: true,
  imports: [NgIf, NgFor, CommonModule],
  templateUrl: './article-renderer.component.html',
  styleUrl: './article-renderer.component.css'
})
export class ArticleRendererComponent {
  @Input({ required: true }) blocks: ArticleBlock[] = [];

  trackByIndex = (_: number, __: any) => _;
  isText = (s: InlineSegment): s is Extract<InlineSegment, { type: 'text' | 'em' | 'strong' }> =>
    s.type === 'text' || s.type === 'em' || s.type === 'strong';
}
