import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="projects-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-subtitle">A showcase of my best work in C# full stack development</p>
        </div>
        
        <div class="filter-tabs">
          <button 
            class="filter-tab" 
            [class.active]="selectedFilter === filter"
            *ngFor="let filter of filters" 
            (click)="setFilter(filter)">
            {{ filter }}
          </button>
        </div>
        
        <div class="projects-grid">
          <div class="project-card" *ngFor="let project of filteredProjects">
            <div class="project-image">
              <img [src]="project.image" [alt]="project.title" />
              <div class="project-overlay">
                <div class="project-actions">
                  <button class="action-btn" (click)="viewProject(project)">
                    <span>👁️</span> View
                  </button>
                  <button class="action-btn" (click)="viewCode(project)">
                    <span>👨‍💻</span> Code
                  </button>
                </div>
              </div>
            </div>
            
            <div class="project-content">
              <div class="project-header">
                <h3 class="project-title">{{ project.title }}</h3>
                <span class="project-type">{{ project.type }}</span>
              </div>
              
              <p class="project-description">{{ project.description }}</p>
              
              <div class="project-tech">
                <span class="tech-tag" *ngFor="let tech of project.technologies">{{ tech }}</span>
              </div>
              
              <div class="project-stats">
                <div class="stat">
                  <span class="stat-icon">⭐</span>
                  <span>{{ project.stars }} stars</span>
                </div>
                <div class="stat">
                  <span class="stat-icon">🍴</span>
                  <span>{{ project.forks }} forks</span>
                </div>
                <div class="stat">
                  <span class="stat-icon">📅</span>
                  <span>{{ project.lastUpdated }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="projects-summary">
          <div class="summary-stats">
            <div class="summary-stat">
              <h3>50+</h3>
              <p>Total Projects</p>
            </div>
            <div class="summary-stat">
              <h3>100k+</h3>
              <p>Lines of Code</p>
            </div>
            <div class="summary-stat">
              <h3>25+</h3>
              <p>Technologies Used</p>
            </div>
            <div class="summary-stat">
              <h3>15+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects-section {
      padding: 6rem 0;
      background: white;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    
    .section-header {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 1rem;
    }
    
    .section-subtitle {
      font-size: 1.125rem;
      color: #64748b;
      max-width: 600px;
      margin: 0 auto;
    }
    
    .filter-tabs {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 3rem;
      flex-wrap: wrap;
    }
    
    .filter-tab {
      padding: 0.75rem 1.5rem;
      border: 2px solid #e2e8f0;
      background: white;
      border-radius: 0.5rem;
      font-weight: 600;
      color: #64748b;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .filter-tab:hover {
      border-color: #2563eb;
      color: #2563eb;
    }
    
    .filter-tab.active {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-color: transparent;
      color: white;
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }
    
    .project-card {
      background: white;
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      border: 1px solid #e2e8f0;
      transition: all 0.3s ease;
    }
    
    .project-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    }
    
    .project-image {
      position: relative;
      height: 200px;
      overflow: hidden;
    }
    
    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    
    .project-card:hover .project-image img {
      transform: scale(1.1);
    }
    
    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .project-card:hover .project-overlay {
      opacity: 1;
    }
    
    .project-actions {
      display: flex;
      gap: 1rem;
    }
    
    .action-btn {
      background: white;
      color: #1e293b;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .action-btn:hover {
      background: #f1f5f9;
      transform: translateY(-2px);
    }
    
    .project-content {
      padding: 1.5rem;
    }
    
    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
    }
    
    .project-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: #1e293b;
      margin: 0;
    }
    
    .project-type {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 0.5rem;
      font-size: 0.75rem;
      font-weight: 600;
    }
    
    .project-description {
      color: #64748b;
      line-height: 1.6;
      margin-bottom: 1rem;
    }
    
    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }
    
    .tech-tag {
      background: #f1f5f9;
      color: #475569;
      padding: 0.25rem 0.75rem;
      border-radius: 0.5rem;
      font-size: 0.875rem;
      font-weight: 500;
    }
    
    .project-stats {
      display: flex;
      justify-content: space-between;
      padding-top: 1rem;
      border-top: 1px solid #e2e8f0;
    }
    
    .stat {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      font-size: 0.875rem;
      color: #64748b;
    }
    
    .stat-icon {
      font-size: 1rem;
    }
    
    .projects-summary {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 1.5rem;
      padding: 3rem;
      color: white;
      text-align: center;
    }
    
    .summary-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 2rem;
    }
    
    .summary-stat h3 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }
    
    .summary-stat p {
      color: rgba(255, 255, 255, 0.9);
      margin: 0;
    }
    
    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
      
      .filter-tabs {
        flex-direction: column;
        align-items: center;
      }
      
      .project-header {
        flex-direction: column;
        gap: 0.5rem;
        align-items: flex-start;
      }
      
      .project-stats {
        flex-direction: column;
        gap: 0.5rem;
      }
      
      .container {
        padding: 0 1rem;
      }
    }
  `]
})
export class ProjectsComponent {
  filters = ['All', 'Web Apps', 'APIs', 'Desktop', 'Mobile'];
  selectedFilter = 'All';

  projects = [
    {
      title: 'E-Commerce Platform',
      type: 'Web App',
      description: 'Full-featured e-commerce platform built with ASP.NET Core, Angular, and SQL Server. Features include user authentication, product catalog, shopping cart, and payment processing.',
      technologies: ['C#', 'ASP.NET Core', 'Angular', 'SQL Server', 'Azure', 'Stripe API'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      stars: 150,
      forks: 45,
      lastUpdated: '2023'
    },
    {
      title: 'Microservices Architecture',
      type: 'API',
      description: 'Scalable microservices architecture using .NET 6, Docker containers, and Azure Service Bus for inter-service communication.',
      technologies: ['C#', '.NET 6', 'Docker', 'Azure Service Bus', 'Redis', 'MongoDB'],
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
      stars: 89,
      forks: 23,
      lastUpdated: '2023'
    },
    {
      title: 'Real-time Chat Application',
      type: 'Web App',
      description: 'Real-time messaging application with SignalR, featuring group chats, file sharing, and notification system.',
      technologies: ['C#', 'SignalR', 'Angular', 'PostgreSQL', 'WebSockets'],
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg',
      stars: 127,
      forks: 38,
      lastUpdated: '2023'
    },
    {
      title: 'Desktop Analytics Tool',
      type: 'Desktop',
      description: 'WPF application for data visualization and analytics with advanced charting capabilities and export functions.',
      technologies: ['C#', 'WPF', 'MVVM', 'Entity Framework', 'SQLite'],
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg',
      stars: 64,
      forks: 18,
      lastUpdated: '2022'
    },
    {
      title: 'Mobile API Gateway',
      type: 'API',
      description: 'High-performance API gateway built with ASP.NET Core, handling authentication, rate limiting, and request routing.',
      technologies: ['C#', 'ASP.NET Core', 'OAuth 2.0', 'Redis', 'Docker'],
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
      stars: 98,
      forks: 31,
      lastUpdated: '2023'
    },
    {
      title: 'Xamarin Cross-platform App',
      type: 'Mobile',
      description: 'Cross-platform mobile application for task management with offline synchronization and push notifications.',
      technologies: ['C#', 'Xamarin', 'MAUI', 'SQLite', 'Azure Notification Hubs'],
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg',
      stars: 76,
      forks: 22,
      lastUpdated: '2023'
    }
  ];

  get filteredProjects() {
    if (this.selectedFilter === 'All') {
      return this.projects;
    }
    return this.projects.filter(project => project.type === this.selectedFilter);
  }

  setFilter(filter: string) {
    this.selectedFilter = filter;
  }

  viewProject(project: any) {
    // In a real application, this would navigate to project details or external URL
    alert(`Viewing project: ${project.title}`);
  }

  viewCode(project: any) {
    // In a real application, this would open the GitHub repository
    alert(`Opening code repository for: ${project.title}`);
  }
}