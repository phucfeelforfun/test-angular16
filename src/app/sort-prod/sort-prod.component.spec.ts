import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortProdComponent } from './sort-prod.component';

describe('SortProdComponent', () => {
  let component: SortProdComponent;
  let fixture: ComponentFixture<SortProdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortProdComponent]
    });
    fixture = TestBed.createComponent(SortProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
