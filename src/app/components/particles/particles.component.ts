import { Component, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-particles',
  standalone: true,
imports: [],
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.css']
})
export class ParticlesComponent implements AfterViewInit {
   @ViewChild('particlesCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private particles: any[] = [];

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    this.resizeCanvas();
    this.initParticles();
    this.animate();
  }

  @HostListener('window:resize')
  onResize() {
    this.resizeCanvas();
    this.initParticles();
  }

  private resizeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth / 2; // largeur limitée à la zone du hero droite
    canvas.height = window.innerHeight / 2;
  }

  private initParticles() {
    const canvas = this.canvasRef.nativeElement;
    this.particles = [];
    const numParticles = 40; // moins nombreuses mais plus visibles

    for (let i = 0; i < numParticles; i++) {
      this.particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 6 + 4, // tailles variées (4 à 10 px)
        dx: (Math.random() - 0.5) * 0.6, // mouvement horizontal doux
        dy: (Math.random() - 0.5) * 0.6, // mouvement vertical doux
        alpha: Math.random(), // transparence initiale
        flicker: Math.random() * 0.02 + 0.005 // vitesse du scintillement
      });
    }
  }

  private draw() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = this.ctx;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let p of this.particles) {
      ctx.beginPath();
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
      gradient.addColorStop(0, `rgba(255, 215, 0, ${p.alpha})`); // or lumineux
      gradient.addColorStop(1, 'rgba(255, 215, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
      ctx.fill();
    }

    this.update();
  }

  private update() {
    const canvas = this.canvasRef.nativeElement;

    for (let p of this.particles) {
      // mouvement flottant
      p.x += p.dx;
      p.y += p.dy;

      // effet scintillement (alpha varie légèrement)
      p.alpha += p.flicker;
      if (p.alpha <= 0 || p.alpha >= 1) {
        p.flicker *= -1;
      }

      // repositionne si hors zone
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
    }
  }

  private animate() {
    this.draw();
    requestAnimationFrame(() => this.animate());
  }
}
