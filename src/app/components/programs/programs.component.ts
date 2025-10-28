import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SubjectService } from '../../services/subject.service';
import { Subject } from '../../models/subject.model';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.css'
})
export class ProgramsComponent implements OnInit {
  subjects: Subject[] = [];
  loading = true;

  constructor(
    private subjectService: SubjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadSubjects();
  }

  loadSubjects(): void {
    this.subjectService.getSubjects().subscribe({
      next: (data) => {
        this.subjects = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading subjects:', error);
        this.loading = false;
      }
    });
  }

  getIcon(name: string): string {
    const nameLower = name.toLowerCase();
    if (nameLower.includes('ent') || nameLower.includes('ент')) return '📚';
    if (nameLower.includes('ктл') || nameLower.includes('ниш') || nameLower.includes('рфмш')) return '🎓';
    if (nameLower.includes('ielts')) return '🗣️';
    if (nameLower.includes('sat')) return '✍️';
    if (nameLower.includes('web')) return '💻';
    if (nameLower.includes('data')) return '📊';
    if (nameLower.includes('software')) return '⚙️';
    if (nameLower.includes('китайский') || nameLower.includes('chinese')) return '🇨🇳';
    if (nameLower.includes('испанский') || nameLower.includes('spanish')) return '🇪🇸';
    if (nameLower.includes('немецкий') || nameLower.includes('german')) return '🇩🇪';
    return '📖';
  }

  viewDetails(subject: Subject): void {
    const nameLower = subject.name.toLowerCase();
    
    if (nameLower.includes('ielts')) {
      this.router.navigate(['/ielts']);
    } else if (nameLower.includes('ent') || nameLower.includes('ент')) {
      this.router.navigate(['/ent']);
    } else {
      // Для других курсов можно добавить общую страницу деталей
      console.log('Детали курса:', subject.name);
      alert(`Подробная информация о курсе "${subject.name}" скоро будет доступна!`);
    }
  }
}
