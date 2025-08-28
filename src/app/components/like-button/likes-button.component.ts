import { CommonModule } from '@angular/common';
import { Component, computed, Input, OnInit, signal } from '@angular/core';
import { LikesService } from './likes.service';

@Component({
  selector: 'app-likes-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './likes-button.component.html',
  styleUrl: './likes-button.component.css'
})
export class LikesButtonComponent implements OnInit{
  /** Identifiant unique de l'article (ex: a1) */
  @Input({ required: true }) articleId!: string;
  /** Taille du bouton : 'sm' | 'md' | 'lg' */
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  /** Afficher le compteur */
  @Input() showCount = true;
  /** Compteur initial éventuel (provenant d'un backend), ignoré si déjà présent en localStorage */
  @Input() initialCount: number | null = null;


  // signals (Angular 16+)
  liked = signal(false);
  count = signal(0);
  busy = signal(false);


  constructor(private likes: LikesService) {}


  ngOnInit(): void {
    if (this.initialCount !== null && this.initialCount !== undefined) {
    this.likes.initCountIfUnset(this.articleId, this.initialCount);
    }
    this.liked.set(this.likes.getLiked(this.articleId));
    this.count.set(this.likes.getCount(this.articleId));
  }


  svgSize = computed(() => {
    switch (this.size) {
      case 'sm': return 18;
      case 'md': return 22;
      case 'lg': return 28;
      default: return 22;
    }
  });


  onToggle() {
    if (this.busy()) return;
    this.busy.set(true);

    // Ici on pourrait appeler un backend async; pour la démo, c'est instantané
    const res = this.likes.toggle(this.articleId);
    this.liked.set(res.liked);
    this.count.set(res.count);


    // petite pause pour éviter le spam et laisser l'anim se jouer
    setTimeout(() => this.busy.set(false), 120);
  }
}
