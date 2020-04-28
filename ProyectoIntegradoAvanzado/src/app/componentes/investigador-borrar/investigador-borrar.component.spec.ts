import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigadorBorrarComponent } from './investigador-borrar.component';

describe('InvestigadorBorrarComponent', () => {
  let component: InvestigadorBorrarComponent;
  let fixture: ComponentFixture<InvestigadorBorrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestigadorBorrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigadorBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
