import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigadoresDetallesComponent } from './investigadores-detalles.component';

describe('InvestigadoresDetallesComponent', () => {
  let component: InvestigadoresDetallesComponent;
  let fixture: ComponentFixture<InvestigadoresDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestigadoresDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigadoresDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
