import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigadorListadoComponent } from './investigador-listado.component';

describe('InvestigadorListadoComponent', () => {
  let component: InvestigadorListadoComponent;
  let fixture: ComponentFixture<InvestigadorListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestigadorListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigadorListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
