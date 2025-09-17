import { Component, Input, OnInit, signal } from '@angular/core';

const NAMESPACE = 'clairobscur'; // pas d'espace, pas de slash

@Component({
  selector: 'app-likes-button',
  standalone: true,
  templateUrl: './likes-button.component.html',
})
export class LikesButtonComponent implements OnInit {
  @Input({ required: true }) articleId!: string;

  count = signal(0);
  liked = signal(false);
  busy = signal(false);

  private counterName!: string; // nom du compteur côté API (safe)

  ngOnInit() {
    // Nom de compteur 100% alphanumérique pour éviter les refus
    this.counterName = ('article' + String(this.articleId))
      .replace(/[^A-Za-z0-9]/g, '')
      .slice(0, 64); // garde court si jamais

    this.getCount();
  }

  private async getCount() {
    try {
      const url = `https://api.counterapi.dev/v1/${NAMESPACE}/${this.counterName}`;
      const res = await fetch(url, { method: 'GET' });
      const data = await res.json();
      this.count.set((data.value ?? data.count ?? 0) as number);
    } catch {
      // pas de throw : on reste silencieux en prod
    }
  }

  async onLike() {
    if (this.liked() || this.busy()) return;
    this.busy.set(true);
    try {
      // V1 = GET sur /up (pas de POST)
      const url = `https://api.counterapi.dev/v1/${NAMESPACE}/${this.counterName}/up`;
      const res = await fetch(url, { method: 'GET' });
      const data = await res.json();
      this.count.set((data.value ?? data.count ?? 0) as number);
      this.liked.set(true);
    } catch {
      // option: afficher un toast d’erreur
    } finally {
      this.busy.set(false);
    }
  }
}