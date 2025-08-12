import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              Hi, I'm <span class="highlight">John Developer</span>
            </h1>
            <h2 class="hero-subtitle">C# Full Stack Developer</h2>
            <p class="hero-description">
              Passionate full stack developer with 5+ years of experience building scalable web applications 
              using C#, .NET Core, Angular, and cloud technologies. I specialize in creating robust backend 
              systems and intuitive frontend experiences that solve real-world problems.
            </p>
            <div class="hero-stats">
              <div class="stat">
                <h3>50+</h3>
                <span>Projects Completed</span>
              </div>
              <div class="stat">
                <h3>5+</h3>
                <span>Years Experience</span>
              </div>
              <div class="stat">
                <h3>20+</h3>
                <span>Technologies</span>
              </div>
            </div>
            <div class="hero-actions">
              <button class="btn btn-primary" (click)="scrollToProjects()">View My Work</button>
              <button class="btn btn-secondary" (click)="downloadCV()">Download CV</button>
            </div>
          </div>
          <div class="hero-image">
            <div class="profile-card">
              <div class="profile-image">
                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" alt="Profile" />
              </div>
              <div class="profile-info">
                <h3>John Developer</h3>
                <p>Senior Full Stack Developer</p>
                <div class="social-links">
                  <a href="#" class="social-link">LinkedIn</a>
                  <a href="#" class="social-link">GitHub</a>
                  <a href="#" class="social-link">Email</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="about-details">
          <div class="detail-card">
            <div class="icon">🎯</div>
            <h3>Mission-Driven</h3>
            <p>Building software solutions that make a meaningful impact on businesses and users.</p>
          </div>
          <div class="detail-card">
            <div class="icon">⚡</div>
            <h3>Performance-Focused</h3>
            <p>Optimizing applications for speed, scalability, and exceptional user experience.</p>
          </div>
          <div class="detail-card">
            <div class="icon">🔧</div>
            <h3>Problem Solver</h3>
            <p>Analyzing complex challenges and delivering elegant, maintainable solutions.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
      padding: 6rem 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    
    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      margin-bottom: 4rem;
    }
    
    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      line-height: 1.2;
    }
    
    .highlight {
      background: linear-gradient(45deg, #ffd89b 0%, #19547b 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .hero-subtitle {
      font-size: 1.5rem;
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 1.5rem;
    }
    
    .hero-description {
      font-size: 1.1rem;
      line-height: 1.7;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 2rem;
    }
    
    .hero-stats {
      display: flex;
      gap: 2rem;
      margin-bottom: 2rem;
    }
    
    .stat {
      text-align: center;
    }
    
    .stat h3 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 0.25rem;
      color: #ffd89b;
    }
    
    .stat span {
      font-size: 0.875rem;
      color: rgba(255, 255, 255, 0.8);
    }
    
    .hero-actions {
      display: flex;
      gap: 1rem;
    }
    
    .btn {
      padding: 0.875rem 2rem;
      border: none;
      border-radius: 0.5rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      display: inline-block;
      font-size: 1rem;
    }
    
    .btn-primary {
      background: #ffffff;
      color: #2563eb;
    }
    
    .btn-primary:hover {
      background: #f8fafc;
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
    }
    
    .btn-secondary {
      background: transparent;
      color: white;
      border: 2px solid rgba(255, 255, 255, 0.5);
    }
    
    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: white;
      transform: translateY(-2px);
    }
    
    .profile-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 1.5rem;
      padding: 2rem;
      text-align: center;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .profile-image {
      width: 200px;
      height: 200px;
      margin: 0 auto 1.5rem;
      border-radius: 50%;
      overflow: hidden;
      border: 4px solid rgba(255, 255, 255, 0.3);
    }
    
    .profile-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .profile-info h3 {
      margin-bottom: 0.5rem;
      font-size: 1.25rem;
    }
    
    .profile-info p {
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 1.5rem;
    }
    
    .social-links {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }
    
    .social-link {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 0.5rem;
      transition: all 0.3s ease;
    }
    
    .social-link:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: white;
    }
    
    .about-details {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .detail-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 1rem;
      padding: 2rem;
      text-align: center;
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: transform 0.3s ease;
    }
    
    .detail-card:hover {
      transform: translateY(-4px);
    }
    
    .icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    .detail-card h3 {
      margin-bottom: 1rem;
      font-size: 1.25rem;
    }
    
    .detail-card p {
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
    }
    
    @media (max-width: 768px) {
      .hero-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
      }
      
      .hero-title {
        font-size: 2.5rem;
      }
      
      .hero-actions {
        justify-content: center;
      }
      
      .hero-stats {
        justify-content: center;
      }
      
      .container {
        padding: 0 1rem;
      }
    }
  `]
})
export class AboutComponent {
  scrollToProjects() {
    const element = document.getElementById('projects');
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

  downloadCV() {
    // In a real application, this would download the actual CV file
    alert('CV download functionality would be implemented here');
  }
}