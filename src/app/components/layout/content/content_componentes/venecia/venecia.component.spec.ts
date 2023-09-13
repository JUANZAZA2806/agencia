import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeneciaComponent } from './venecia.component';

describe('VeneciaComponent', () => {
  let component: VeneciaComponent;
  let fixture: ComponentFixture<VeneciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeneciaComponent]
    });
    fixture = TestBed.createComponent(VeneciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
