import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements AfterViewInit {

  @ViewChild('logo') logo!: ElementRef;
  @ViewChild('techs') techs!: ElementRef;

  ngAfterViewInit(): void {

    gsap.registerPlugin(ScrollTrigger);

    /* ---------------------------------------------
          LOGO FLOTANTE + PEQUEÑO OSCILADO
    ----------------------------------------------*/
    gsap.to(this.logo.nativeElement, {
      y: -25,
      duration: 2.2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    /* ---------------------------------------------
           PARALLAX DEL LOGO AL HACER SCROLL
    ----------------------------------------------*/
    gsap.to(this.logo.nativeElement, {
      y: -80,
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });

    /* ---------------------------------------------
                ANIMACIÓN DE ENTRADA DEL HERO
    ----------------------------------------------*/
    gsap.from('.hero-left', {
      opacity: 0,
      x: -40,
      duration: 1.3,
      ease: 'power3.out'
    });

    gsap.from('.hero-right', {
      opacity: 0,
      scale: 0.85,
      duration: 1.4,
      ease: 'power3.out'
    });

    /* ---------------------------------------------
              APARICIÓN DE CARDS INDIVIDUAL
    ----------------------------------------------*/
    gsap.from(this.techs.nativeElement.querySelectorAll('.tech-card'), {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: this.techs.nativeElement,
        start: 'top 85%'
      }
    });

    /* ---------------------------------------------
             PARALLAX SUAVE DEL BACKGROUND
    ----------------------------------------------*/
    gsap.to('.landing-bg', {
      backgroundPosition: '50% 20%',
      scrollTrigger: {
        trigger: '.landing-bg',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2
      }
    });

    /* ---------------------------------------------
              EFECTO DEL HEADER EN SCROLL
    ----------------------------------------------*/
    gsap.to('.landing-header', {
      backgroundColor: 'rgba(0,0,0,0.55)',
      backdropFilter: 'blur(12px)',
      duration: 0.3,
      scrollTrigger: {
        trigger: '.hero',
        start: 'bottom top',
        toggleActions: 'play none none reverse'
      }
    });

  }
}
