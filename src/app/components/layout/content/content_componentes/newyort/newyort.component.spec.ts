import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewyortComponent } from './newyort.component';

describe('NewyortComponent', () => {
  let component: NewyortComponent;
  let fixture: ComponentFixture<NewyortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewyortComponent]
    });
    fixture = TestBed.createComponent(NewyortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
