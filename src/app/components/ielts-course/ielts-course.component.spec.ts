import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IeltsCourseComponent } from './ielts-course.component';

describe('IeltsCourseComponent', () => {
  let component: IeltsCourseComponent;
  let fixture: ComponentFixture<IeltsCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IeltsCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IeltsCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
