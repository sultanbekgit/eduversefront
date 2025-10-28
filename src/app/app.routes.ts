import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { IeltsCourseComponent } from './components/ielts-course/ielts-course.component';
import { EntCourseComponent } from './components/ent-course/ent-course.component';

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: 'ielts', component: IeltsCourseComponent },
  { path: 'ent', component: EntCourseComponent },
  { path: '**', redirectTo: '' }
];
