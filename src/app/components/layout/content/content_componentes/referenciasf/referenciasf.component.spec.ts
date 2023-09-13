import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciasfComponent } from './referenciasf.component';

describe('ReferenciasfComponent', () => {
  let component: ReferenciasfComponent;
  let fixture: ComponentFixture<ReferenciasfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReferenciasfComponent]
    });
    fixture = TestBed.createComponent(ReferenciasfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
