import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header [class]="'header ' + (isScrolled ? 'scrolled' : '')">
      <div class="container">
        <div class="nav-brand">
          <h2>John Developer</h2>
          <span class="subtitle">C# Full Stack Developer</span>
        </div>
        
        <nav class="nav-menu">
          <a href="#about" class="nav-link" (click)="scrollToSection('about', $event)">About Me</a>
          <a href="#academic" class="nav-link" (click)="scrollToSection('academic', $event)">Academic</a>
          <a href="#projects" class="nav-link" (click)="scrollToSection('projects', $event)">Projects</a>
          <a href="#skills" class="nav-link" (click)="scrollToSection('skills', $event)">Skills</a>
        </nav>
        
        <button class="mobile-menu-btn" (click)="toggleMobileMenu()">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      <div class="mobile-menu" [class.active]="mobileMenuActive">
        <a href="#about" class="mobile-nav-link" (click)="scrollToSection('about', $event)">About Me</a>
        <a href="#academic" class="mobile-nav-link" (click)="scrollToSection('academic', $event)">Academic</a>
        <a href="#projects" class="mobile-nav-link" (click)="scrollToSection('projects', $event)">Projects</a>
        <a href="#skills" class="mobile-nav-link" (click)="scrollToSection('skills', $event)">Skills</a>
      </div>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
      z-index: 1000;
      transition: all 0.3s ease;
    }
    
    .header.scrolled {
      background: rgba(255, 255, 255, 0.98);
      box-shadow: 0 2px 30px rgba(0, 0, 0, 0.15);
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 80px;
    }
    
    .nav-brand h2 {
      margin: 0;
      color: #2563eb;
      font-size: 1.5rem;
      font-weight: 700;
    }
    
    .subtitle {
      color: #6b7280;
      font-size: 0.875rem;
      display: block;
      margin-top: -0.25rem;
    }
    
    .nav-menu {
      display: flex;
      gap: 2rem;
    }
    
    .nav-link {
      color: #374151;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
      position: relative;
    }
    
    .nav-link:hover {
      color: #2563eb;
      transform: translateY(-2px);
    }
    
    .nav-link::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -4px;
      left: 0;
      background: #2563eb;
      transition: width 0.3s ease;
    }
    
    .nav-link:hover::after {
      width: 100%;
    }
    
    .mobile-menu-btn {
      display: none;
      flex-direction: column;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
    }
    
    .mobile-menu-btn span {
      width: 25px;
      height: 3px;
      background: #374151;
      margin: 3px 0;
      transition: 0.3s;
    }
    
    .mobile-menu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      padding: 1rem;
    }
    
    .mobile-menu.active {
      display: block;
    }
    
    .mobile-nav-link {
      display: block;
      color: #374151;
      text-decoration: none;
      padding: 0.75rem 0;
      font-weight: 500;
      border-bottom: 1px solid #e5e7eb;
    }
    
    @media (max-width: 768px) {
      .nav-menu {
        display: none;
      }
      
      .mobile-menu-btn {
        display: flex;
      }
      
      .container {
        padding: 0 1rem;
      }
    }
  `]
})
export class HeaderComponent {
  isScrolled = false;
  mobileMenuActive = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    this.mobileMenuActive = false;
    
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  toggleMobileMenu() {
    this.mobileMenuActive = !this.mobileMenuActive;
  }
}