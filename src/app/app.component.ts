import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { AcademicComponent } from './components/academic/academic.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    AboutComponent,
    AcademicComponent,
    ProjectsComponent,
    SkillsComponent,
    FooterComponent
  ],
  template: `
    <div class="app-container">
      <app-header></app-header>
      <main class="main-content">
        <app-about id="about"></app-about>
        <app-academic id="academic"></app-academic>
        <app-projects id="projects"></app-projects>
        <app-skills id="skills"></app-skills>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    
    .main-content {
      padding-top: 80px;
    }
    
    section {
      scroll-margin-top: 80px;
    }
  `]
})
export class AppComponent {
  title = 'C# Full Stack Developer Portfolio';
}