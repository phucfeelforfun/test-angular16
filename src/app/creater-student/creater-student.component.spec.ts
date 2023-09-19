import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaterStudentComponent } from './creater-student.component';

describe('CreaterStudentComponent', () => {
  let component: CreaterStudentComponent;
  let fixture: ComponentFixture<CreaterStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreaterStudentComponent]
    });
    fixture = TestBed.createComponent(CreaterStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
