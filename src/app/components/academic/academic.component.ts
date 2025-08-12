import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-academic',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="academic-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Academic Background</h2>
          <p class="section-subtitle">My educational journey and continuous learning path</p>
        </div>
        
        <div class="timeline">
          <div class="timeline-item" *ngFor="let item of academicHistory; let i = index" [class.left]="i % 2 === 0" [class.right]="i % 2 !== 0">
            <div class="timeline-content">
              <div class="timeline-header">
                <h3>{{ item.degree }}</h3>
                <span class="timeline-date">{{ item.year }}</span>
              </div>
              <h4 class="institution">{{ item.institution }}</h4>
              <p class="description">{{ item.description }}</p>
              <div class="highlights" *ngIf="item.highlights">
                <div class="highlight" *ngFor="let highlight of item.highlights">
                  <span class="highlight-icon">✓</span>
                  <span>{{ highlight }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="certifications">
          <h3 class="certifications-title">Professional Certifications</h3>
          <div class="certifications-grid">
            <div class="certification-card" *ngFor="let cert of certifications">
              <div class="cert-icon">
                <img [src]="cert.icon" [alt]="cert.name" />
              </div>
              <div class="cert-info">
                <h4>{{ cert.name }}</h4>
                <p>{{ cert.issuer }}</p>
                <span class="cert-date">{{ cert.date }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="learning-stats">
          <div class="stat-card">
            <div class="stat-number">15+</div>
            <div class="stat-label">Certifications</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">500+</div>
            <div class="stat-label">Hours of Learning</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">10+</div>
            <div class="stat-label">Courses Completed</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">3.8</div>
            <div class="stat-label">GPA</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .academic-section {
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
    
    .timeline {
      position: relative;
      margin: 4rem 0;
    }
    
    .timeline::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 100%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 2px;
    }
    
    .timeline-item {
      position: relative;
      width: 50%;
      padding: 2rem;
      margin-bottom: 2rem;
    }
    
    .timeline-item::before {
      content: '';
      position: absolute;
      top: 2rem;
      width: 20px;
      height: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 50%;
      border: 4px solid white;
      box-shadow: 0 0 0 4px #f8fafc;
    }
    
    .timeline-item.left {
      left: 0;
      text-align: right;
    }
    
    .timeline-item.left::before {
      right: -12px;
    }
    
    .timeline-item.right {
      left: 50%;
    }
    
    .timeline-item.right::before {
      left: -12px;
    }
    
    .timeline-content {
      background: white;
      border-radius: 1rem;
      padding: 2rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      border: 1px solid #e2e8f0;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .timeline-content:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    }
    
    .timeline-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
    }
    
    .timeline-header h3 {
      font-size: 1.25rem;
      font-weight: 700;
      color: #1e293b;
      margin: 0;
      flex: 1;
    }
    
    .timeline-date {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      font-size: 0.875rem;
      font-weight: 600;
    }
    
    .institution {
      color: #2563eb;
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    
    .description {
      color: #64748b;
      line-height: 1.6;
      margin-bottom: 1rem;
    }
    
    .highlights {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .highlight {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;
      color: #374151;
    }
    
    .highlight-icon {
      background: #10b981;
      color: white;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
    }
    
    .certifications {
      margin: 4rem 0;
    }
    
    .certifications-title {
      font-size: 2rem;
      font-weight: 700;
      color: #1e293b;
      text-align: center;
      margin-bottom: 2rem;
    }
    
    .certifications-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }
    
    .certification-card {
      background: white;
      border-radius: 1rem;
      padding: 1.5rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      border: 1px solid #e2e8f0;
      display: flex;
      align-items: center;
      gap: 1rem;
      transition: transform 0.3s ease;
    }
    
    .certification-card:hover {
      transform: translateY(-2px);
    }
    
    .cert-icon img {
      width: 50px;
      height: 50px;
      object-fit: contain;
    }
    
    .cert-info h4 {
      margin: 0 0 0.25rem 0;
      color: #1e293b;
      font-weight: 600;
    }
    
    .cert-info p {
      margin: 0 0 0.25rem 0;
      color: #64748b;
      font-size: 0.875rem;
    }
    
    .cert-date {
      font-size: 0.75rem;
      color: #9ca3af;
    }
    
    .learning-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
      margin-top: 4rem;
    }
    
    .stat-card {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      text-align: center;
      padding: 2rem;
      border-radius: 1rem;
      transition: transform 0.3s ease;
    }
    
    .stat-card:hover {
      transform: translateY(-4px);
    }
    
    .stat-number {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }
    
    .stat-label {
      font-size: 1rem;
      opacity: 0.9;
    }
    
    @media (max-width: 768px) {
      .timeline::before {
        left: 2rem;
      }
      
      .timeline-item {
        width: 100%;
        left: 0 !important;
        text-align: left;
        padding-left: 4rem;
        padding-right: 1rem;
      }
      
      .timeline-item::before {
        left: 1rem !important;
      }
      
      .timeline-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
      }
      
      .container {
        padding: 0 1rem;
      }
    }
  `]
})
export class AcademicComponent {
  academicHistory = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'University of Technology',
      year: '2019-2021',
      description: 'Specialized in Software Engineering with focus on distributed systems and cloud architecture. Completed thesis on microservices optimization in .NET ecosystem.',
      highlights: [
        'Graduated Magna Cum Laude (GPA 3.8)',
        'Research Assistant in Cloud Computing Lab',
        'Published 2 papers on microservices architecture',
        'Teaching Assistant for Advanced C# Programming'
      ]
    },
    {
      degree: 'Bachelor of Computer Science',
      institution: 'State University',
      year: '2015-2019',
      description: 'Comprehensive foundation in computer science fundamentals including algorithms, data structures, software engineering, and database management.',
      highlights: [
        'Dean\'s List for 6 semesters',
        'Computer Science Society President',
        'Led team in ACM Programming Contest',
        'Internship at Microsoft (Summer 2018)'
      ]
    },
    {
      degree: 'Advanced Certificate in Full Stack Development',
      institution: 'Tech Academy',
      year: '2020',
      description: 'Intensive program covering modern web development technologies including React, Angular, Node.js, and cloud deployment strategies.',
      highlights: [
        'Built 5 full-stack applications',
        'Achieved 98% course completion score',
        'Mentored 10+ junior developers'
      ]
    }
  ];

  certifications = [
    {
      name: 'Microsoft Certified: Azure Developer Associate',
      issuer: 'Microsoft',
      date: '2023',
      icon: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg'
    },
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2022',
      icon: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg'
    },
    {
      name: 'Google Professional Cloud Developer',
      issuer: 'Google Cloud',
      date: '2023',
      icon: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg'
    },
    {
      name: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: '2022',
      icon: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg'
    }
  ];
}