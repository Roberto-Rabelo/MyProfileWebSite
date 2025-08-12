import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="skills-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Skills & Expertise</h2>
          <p class="section-subtitle">My technical and soft skills that drive successful project delivery</p>
        </div>
        
        <div class="skills-container">
          <div class="skills-category">
            <h3 class="category-title">
              <span class="category-icon">💻</span>
              Hard Skills
            </h3>
            
            <div class="skills-tabs">
              <button 
                class="skills-tab" 
                [class.active]="selectedHardSkillTab === tab.id"
                *ngFor="let tab of hardSkillTabs" 
                (click)="setHardSkillTab(tab.id)">
                {{ tab.name }}
              </button>
            </div>
            
            <div class="skills-grid">
              <div class="skill-item" *ngFor="let skill of getActiveHardSkills()">
                <div class="skill-header">
                  <div class="skill-info">
                    <span class="skill-icon">{{ skill.icon }}</span>
                    <span class="skill-name">{{ skill.name }}</span>
                  </div>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" [style.width.%]="skill.level"></div>
                </div>
                <p class="skill-description">{{ skill.description }}</p>
              </div>
            </div>
          </div>
          
          <div class="skills-category">
            <h3 class="category-title">
              <span class="category-icon">🤝</span>
              Soft Skills
            </h3>
            
            <div class="soft-skills-grid">
              <div class="soft-skill-card" *ngFor="let skill of softSkills">
                <div class="soft-skill-icon">{{ skill.icon }}</div>
                <h4>{{ skill.name }}</h4>
                <p>{{ skill.description }}</p>
                <div class="skill-rating">
                  <span class="star" [class.filled]="i < skill.rating" *ngFor="let star of [1,2,3,4,5]; let i = index">⭐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="experience-summary">
          <div class="summary-card">
            <h3>Years of Experience</h3>
            <div class="experience-breakdown">
              <div class="experience-item" *ngFor="let exp of experienceBreakdown">
                <div class="experience-header">
                  <span class="technology">{{ exp.technology }}</span>
                  <span class="years">{{ exp.years }} years</span>
                </div>
                <div class="experience-bar">
                  <div class="experience-progress" [style.width.%]="(exp.years / 8) * 100"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="summary-card">
            <h3>Key Achievements</h3>
            <div class="achievements-list">
              <div class="achievement" *ngFor="let achievement of keyAchievements">
                <span class="achievement-icon">{{ achievement.icon }}</span>
                <div class="achievement-content">
                  <h4>{{ achievement.title }}</h4>
                  <p>{{ achievement.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-section {
      padding: 6rem 0;
      background: #f8fafc;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    
    .section-header {
      text-align: center;
      margin-bottom: 4rem;
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
    
    .skills-container {
      display: grid;
      grid-template-columns: 1fr;
      gap: 4rem;
    }
    
    .skills-category {
      background: white;
      border-radius: 1.5rem;
      padding: 2rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }
    
    .category-title {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 1.75rem;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 2rem;
    }
    
    .category-icon {
      font-size: 2rem;
    }
    
    .skills-tabs {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
      flex-wrap: wrap;
    }
    
    .skills-tab {
      padding: 0.5rem 1rem;
      border: 2px solid #e2e8f0;
      background: white;
      border-radius: 0.5rem;
      font-weight: 600;
      color: #64748b;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 0.875rem;
    }
    
    .skills-tab:hover {
      border-color: #2563eb;
      color: #2563eb;
    }
    
    .skills-tab.active {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-color: transparent;
      color: white;
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }
    
    .skill-item {
      background: #f8fafc;
      border-radius: 1rem;
      padding: 1.5rem;
      border: 1px solid #e2e8f0;
      transition: transform 0.3s ease;
    }
    
    .skill-item:hover {
      transform: translateY(-2px);
    }
    
    .skill-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }
    
    .skill-info {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .skill-icon {
      font-size: 1.5rem;
    }
    
    .skill-name {
      font-weight: 600;
      color: #1e293b;
    }
    
    .skill-percentage {
      font-weight: 700;
      color: #2563eb;
    }
    
    .skill-bar {
      height: 8px;
      background: #e2e8f0;
      border-radius: 4px;
      overflow: hidden;
      margin-bottom: 0.75rem;
    }
    
    .skill-progress {
      height: 100%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 4px;
      transition: width 1s ease;
    }
    
    .skill-description {
      color: #64748b;
      font-size: 0.875rem;
      line-height: 1.5;
      margin: 0;
    }
    
    .soft-skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }
    
    .soft-skill-card {
      background: #f8fafc;
      border-radius: 1rem;
      padding: 1.5rem;
      text-align: center;
      border: 1px solid #e2e8f0;
      transition: transform 0.3s ease;
    }
    
    .soft-skill-card:hover {
      transform: translateY(-4px);
    }
    
    .soft-skill-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    
    .soft-skill-card h4 {
      color: #1e293b;
      font-weight: 600;
      margin-bottom: 0.75rem;
    }
    
    .soft-skill-card p {
      color: #64748b;
      font-size: 0.875rem;
      line-height: 1.5;
      margin-bottom: 1rem;
    }
    
    .skill-rating {
      display: flex;
      justify-content: center;
      gap: 0.25rem;
    }
    
    .star {
      font-size: 1.25rem;
      filter: grayscale(100%);
      transition: filter 0.3s ease;
    }
    
    .star.filled {
      filter: none;
    }
    
    .experience-summary {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      gap: 2rem;
      margin-top: 4rem;
    }
    
    .summary-card {
      background: white;
      border-radius: 1.5rem;
      padding: 2rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }
    
    .summary-card h3 {
      color: #1e293b;
      font-weight: 700;
      margin-bottom: 1.5rem;
      font-size: 1.25rem;
    }
    
    .experience-breakdown {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    .experience-item {
      padding: 1rem;
      background: #f8fafc;
      border-radius: 0.75rem;
    }
    
    .experience-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }
    
    .technology {
      font-weight: 600;
      color: #1e293b;
    }
    
    .years {
      font-weight: 700;
      color: #2563eb;
    }
    
    .experience-bar {
      height: 6px;
      background: #e2e8f0;
      border-radius: 3px;
      overflow: hidden;
    }
    
    .experience-progress {
      height: 100%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 3px;
      transition: width 1s ease;
    }
    
    .achievements-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    .achievement {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1rem;
      background: #f8fafc;
      border-radius: 0.75rem;
    }
    
    .achievement-icon {
      font-size: 1.5rem;
      margin-top: 0.25rem;
    }
    
    .achievement-content h4 {
      color: #1e293b;
      font-weight: 600;
      margin-bottom: 0.25rem;
    }
    
    .achievement-content p {
      color: #64748b;
      font-size: 0.875rem;
      margin: 0;
      line-height: 1.5;
    }
    
    @media (max-width: 768px) {
      .skills-tabs {
        flex-direction: column;
      }
      
      .skills-grid {
        grid-template-columns: 1fr;
      }
      
      .soft-skills-grid {
        grid-template-columns: 1fr;
      }
      
      .experience-summary {
        grid-template-columns: 1fr;
      }
      
      .container {
        padding: 0 1rem;
      }
    }
  `]
})
export class SkillsComponent {
  selectedHardSkillTab = 'backend';

  hardSkillTabs = [
    { id: 'backend', name: 'Backend' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'database', name: 'Database' },
    { id: 'cloud', name: 'Cloud & DevOps' },
    { id: 'tools', name: 'Tools & Others' }
  ];

  hardSkills = {
    backend: [
      {
        name: 'C#',
        icon: '🔷',
        level: 95,
        description: 'Expert in C# with 8+ years of experience building enterprise applications'
      },
      {
        name: 'ASP.NET Core',
        icon: '🌐',
        level: 90,
        description: 'Proficient in building RESTful APIs and web applications'
      },
      {
        name: '.NET Framework',
        icon: '🔧',
        level: 88,
        description: 'Extensive experience with legacy .NET applications and migrations'
      },
      {
        name: 'Entity Framework',
        icon: '🗃️',
        level: 85,
        description: 'Code-first and database-first approaches for data access'
      }
    ],
    frontend: [
      {
        name: 'Angular',
        icon: '🅰️',
        level: 85,
        description: 'Building complex SPAs with modern Angular features'
      },
      {
        name: 'TypeScript',
        icon: '📘',
        level: 82,
        description: 'Strong typing and modern JavaScript development'
      },
      {
        name: 'HTML/CSS',
        icon: '🎨',
        level: 90,
        description: 'Semantic markup and responsive design principles'
      },
      {
        name: 'JavaScript',
        icon: '⚡',
        level: 80,
        description: 'ES6+ features and modern JavaScript development'
      }
    ],
    database: [
      {
        name: 'SQL Server',
        icon: '🗄️',
        level: 90,
        description: 'Complex queries, stored procedures, and performance optimization'
      },
      {
        name: 'PostgreSQL',
        icon: '🐘',
        level: 75,
        description: 'Advanced features and JSON data handling'
      },
      {
        name: 'MongoDB',
        icon: '🍃',
        level: 70,
        description: 'NoSQL design patterns and aggregation pipelines'
      },
      {
        name: 'Redis',
        icon: '🔴',
        level: 65,
        description: 'Caching strategies and session management'
      }
    ],
    cloud: [
      {
        name: 'Azure',
        icon: '☁️',
        level: 85,
        description: 'App Services, Functions, Storage, and DevOps pipelines'
      },
      {
        name: 'Docker',
        icon: '🐳',
        level: 80,
        description: 'Containerization and orchestration with Docker Compose'
      },
      {
        name: 'Kubernetes',
        icon: '⚙️',
        level: 70,
        description: 'Container orchestration and microservices deployment'
      },
      {
        name: 'AWS',
        icon: '🌩️',
        level: 65,
        description: 'EC2, S3, RDS, and serverless architectures'
      }
    ],
    tools: [
      {
        name: 'Git',
        icon: '📚',
        level: 90,
        description: 'Advanced branching strategies and collaborative workflows'
      },
      {
        name: 'Visual Studio',
        icon: '💜',
        level: 95,
        description: 'Expert-level IDE usage and debugging techniques'
      },
      {
        name: 'Postman',
        icon: '📮',
        level: 85,
        description: 'API testing and documentation'
      },
      {
        name: 'JIRA',
        icon: '📋',
        level: 75,
        description: 'Agile project management and issue tracking'
      }
    ]
  };

  softSkills = [
    {
      name: 'Leadership',
      icon: '👨‍💼',
      rating: 5,
      description: 'Leading development teams and mentoring junior developers'
    },
    {
      name: 'Communication',
      icon: '💬',
      rating: 5,
      description: 'Clear technical communication with stakeholders and team members'
    },
    {
      name: 'Problem Solving',
      icon: '🧩',
      rating: 5,
      description: 'Analytical thinking and creative solutions to complex problems'
    },
    {
      name: 'Time Management',
      icon: '⏰',
      rating: 4,
      description: 'Efficient project delivery and meeting deadlines consistently'
    },
    {
      name: 'Teamwork',
      icon: '🤝',
      rating: 5,
      description: 'Collaborative development and cross-functional team integration'
    },
    {
      name: 'Adaptability',
      icon: '🔄',
      rating: 4,
      description: 'Quick learning of new technologies and adapting to changing requirements'
    }
  ];

  experienceBreakdown = [
    { technology: 'C#', years: 8 },
    { technology: 'ASP.NET Core', years: 6 },
    { technology: 'Angular', years: 5 },
    { technology: 'SQL Server', years: 7 },
    { technology: 'Azure', years: 4 },
    { technology: 'Docker', years: 3 }
  ];

  keyAchievements = [
    {
      icon: '🚀',
      title: 'Led Migration to Microservices',
      description: 'Successfully migrated monolithic application to microservices architecture, improving scalability by 300%'
    },
    {
      icon: '🏆',
      title: 'Microsoft MVP Award',
      description: 'Recognized as Microsoft Most Valuable Professional for contributions to the .NET community'
    },
    {
      icon: '📈',
      title: 'Performance Optimization',
      description: 'Improved application performance by 60% through database optimization and caching strategies'
    },
    {
      icon: '👥',
      title: 'Team Leadership',
      description: 'Led a team of 8 developers in delivering 5 major projects on time and under budget'
    }
  ];

  setHardSkillTab(tabId: string) {
    this.selectedHardSkillTab = tabId;
  }

  getActiveHardSkills() {
    return this.hardSkills[this.selectedHardSkillTab as keyof typeof this.hardSkills] || [];
  }
}