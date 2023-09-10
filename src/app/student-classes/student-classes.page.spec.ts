import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentClassesPage } from './student-classes.page';

describe('StudentClassesPage', () => {
  let component: StudentClassesPage;
  let fixture: ComponentFixture<StudentClassesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StudentClassesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
