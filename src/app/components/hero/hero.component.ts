import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SubjectService } from '../../services/subject.service';
import { Subject } from '../../models/subject.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  subjects: Subject[] = [];

  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.loadSubjects();
  }

  loadSubjects(): void {
    this.subjectService.getSubjects().subscribe({
      next: (data) => {
        this.subjects = data;
      },
      error: (error) => {
        console.error('Error loading subjects:', error);
        // Fallback to sample data if API fails
        this.subjects = [
          { id: 1, name: 'IT' },
          { id: 2, name: 'Math' }
        ];
      }
    });
  }
  onSubmit() {
    console.log('Form submitted:', this.subjects);
    // Handle form submission
  }
}
