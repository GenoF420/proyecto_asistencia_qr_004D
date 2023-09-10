import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentClassPage } from './student-class.page';

describe('StudentClassPage', () => {
  let component: StudentClassPage;
  let fixture: ComponentFixture<StudentClassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StudentClassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
