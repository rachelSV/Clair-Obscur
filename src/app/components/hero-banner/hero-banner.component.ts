import { Component } from '@angular/core';
import { ParticlesComponent } from '../particles/particles.component';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [ParticlesComponent],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.css'
})
export class HeroBannerComponent {

}
