import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHomenameComponent } from './home-homename.component';

describe('HomeHomenameComponent', () => {
  let component: HomeHomenameComponent;
  let fixture: ComponentFixture<HomeHomenameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeHomenameComponent]
    });
    fixture = TestBed.createComponent(HomeHomenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
