import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokioComponent } from './tokio.component';

describe('TokioComponent', () => {
  let component: TokioComponent;
  let fixture: ComponentFixture<TokioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TokioComponent]
    });
    fixture = TestBed.createComponent(TokioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
