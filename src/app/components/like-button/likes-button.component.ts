import { Component, Input, OnInit, signal } from '@angular/core';
import { Database, ref, get, runTransaction } from '@angular/fire/database';

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

  private localKey!: string;

  constructor(private db: Database) {}

  async ngOnInit() {
    this.localKey = `liked:${this.articleId}`;

    // Vérifie si déjà liké sur ce navigateur
    if (localStorage.getItem(this.localKey) === '1') {
      this.liked.set(true);
    }

    const likesRef = ref(this.db, `likes/${this.articleId}`);
    const snapshot = await get(likesRef);
    this.count.set(snapshot.exists() ? snapshot.val() : 0);
  }

  async onToggle() {
    if (this.busy()) return;
    this.busy.set(true);

    const likesRef = ref(this.db, `likes/${this.articleId}`);

    if (this.liked()) {
      // UNLIKE → décrémente
      await runTransaction(likesRef, (current) => {
        return Math.max((current || 0) - 1, 0);
      });
      this.liked.set(false);
      localStorage.removeItem(this.localKey);
    } else {
      // LIKE → incrémente
      await runTransaction(likesRef, (current) => {
        return (current || 0) + 1;
      });
      this.liked.set(true);
      localStorage.setItem(this.localKey, '1');
    }

    // Relire la valeur pour mettre à jour
    const snapshot = await get(likesRef);
    this.count.set(snapshot.val());

    this.busy.set(false);
  }
}