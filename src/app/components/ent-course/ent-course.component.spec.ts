import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntCourseComponent } from './ent-course.component';

describe('EntCourseComponent', () => {
  let component: EntCourseComponent;
  let fixture: ComponentFixture<EntCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
