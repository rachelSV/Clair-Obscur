import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class LikesService {
private keyLiked(id: string) { return `likes:mine:${id}`; }
private keyCount(id: string) { return `likes:count:${id}`; }


getLiked(articleId: string): boolean {
return localStorage.getItem(this.keyLiked(articleId)) === '1';
}


getCount(articleId: string): number {
const raw = localStorage.getItem(this.keyCount(articleId));
return raw ? Math.max(0, parseInt(raw, 10)) : 0;
}


/** Initialise le compteur si absent */
initCountIfUnset(articleId: string, initial: number) {
const exists = localStorage.getItem(this.keyCount(articleId));
if (exists === null) localStorage.setItem(this.keyCount(articleId), `${Math.max(0, initial)}`);
}


/** Toggle like local + compteur simulé. Retourne l'état à jour. */
toggle(articleId: string): { liked: boolean; count: number } {
const currentlyLiked = this.getLiked(articleId);
let count = this.getCount(articleId);


if (currentlyLiked) {
localStorage.setItem(this.keyLiked(articleId), '0');
count = Math.max(0, count - 1);
} else {
localStorage.setItem(this.keyLiked(articleId), '1');
count = count + 1;
}


localStorage.setItem(this.keyCount(articleId), `${count}`);
return { liked: !currentlyLiked, count };
}
}