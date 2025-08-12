import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>John Developer</h3>
            <p>C# Full Stack Developer passionate about building scalable web applications and mentoring others in the tech community.</p>
            <div class="social-links">
              <a href="#" class="social-link">
                <span>💼</span> LinkedIn
              </a>
              <a href="#" class="social-link">
                <span>👨‍💻</span> GitHub
              </a>
              <a href="#" class="social-link">
                <span>📧</span> Email
              </a>
              <a href="#" class="social-link">
                <span>🐦</span> Twitter
              </a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4>Quick Links</h4>
            <nav class="footer-nav">
              <a href="#about" (click)="scrollToSection('about', $event)">About Me</a>
              <a href="#academic" (click)="scrollToSection('academic', $event)">Academic</a>
              <a href="#projects" (click)="scrollToSection('projects', $event)">Projects</a>
              <a href="#skills" (click)="scrollToSection('skills', $event)">Skills</a>
            </nav>
          </div>
          
          <div class="footer-section">
            <h4>Services</h4>
            <nav class="footer-nav">
              <a href="#">Web Development</a>
              <a href="#">API Development</a>
              <a href="#">System Architecture</a>
              <a href="#">Technical Consulting</a>
            </nav>
          </div>
          
          <div class="footer-section">
            <h4>Contact Info</h4>
            <div class="contact-info">
              <div class="contact-item">
                <span class="icon">📧</span>
                <span>john.developer&#64;email.com</span>
              </div>
              <div class="contact-item">
                <span class="icon">📱</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div class="contact-item">
                <span class="icon">📍</span>
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="copyright">
            <p>&copy; 2023 John Developer. All rights reserved.</p>
          </div>
          <div class="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
      color: white;
      padding: 3rem 0 1rem;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    
    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }
    
    .footer-section h3 {
      color: #3b82f6;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    
    .footer-section h4 {
      color: #e2e8f0;
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    
    .footer-section p {
      color: #cbd5e1;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
    
    .social-links {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }
    
    .social-link {
      color: #cbd5e1;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border: 1px solid #475569;
      border-radius: 0.5rem;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;
    }
    
    .social-link:hover {
      background: rgba(59, 130, 246, 0.2);
      border-color: #3b82f6;
      color: #3b82f6;
    }
    
    .footer-nav {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .footer-nav a {
      color: #cbd5e1;
      text-decoration: none;
      transition: color 0.3s ease;
      padding: 0.25rem 0;
    }
    
    .footer-nav a:hover {
      color: #3b82f6;
    }
    
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    
    .contact-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: #cbd5e1;
    }
    
    .icon {
      font-size: 1.1rem;
      width: 1.5rem;
    }
    
    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 2rem;
      border-top: 1px solid #475569;
    }
    
    .copyright p {
      color: #94a3b8;
      margin: 0;
    }
    
    .footer-links {
      display: flex;
      gap: 1.5rem;
    }
    
    .footer-links a {
      color: #94a3b8;
      text-decoration: none;
      font-size: 0.875rem;
      transition: color 0.3s ease;
    }
    
    .footer-links a:hover {
      color: #3b82f6;
    }
    
    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
      }
      
      .footer-bottom {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }
      
      .social-links {
        justify-content: center;
      }
      
      .container {
        padding: 0 1rem;
      }
    }
  `]
})
export class FooterComponent {
  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    
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
}