import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-infos-utiles',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './infos-utiles.component.html',
  styleUrl: './infos-utiles.component.css'
})
export class InfosUtilesComponent {
  isOpen = false;

  // Liens externes à afficher
  items = [
    { label: 'Souffrance, prévention du su*cide • 3114', href: 'https://3114.fr' },
    { label: 'Centre d\'écoute "La porte ouverte" à Toulouse', href: 'https://www.la-porte-ouverte.fr/' },
    { label: 'Dispositif "Mon soutien Psy"', href: 'https://www.ameli.fr/assure/remboursements/rembourse/remboursement-seance-psychologue-mon-soutien-psy' },
    { label: 'Violences Femmes Info • 3919', href: 'https://www.service-public.fr/cmi' },
    { label: 'Enfant en danger • 119', href: 'https://allo119.gouv.fr' },
  ];

  toggle() {
    this.isOpen = !this.isOpen;
    document.documentElement.classList.toggle('overflow-hidden', this.isOpen);
  }

  close() {
    this.isOpen = false;
    document.documentElement.classList.remove('overflow-hidden');
  }
}
