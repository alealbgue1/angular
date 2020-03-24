import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FenomenosListadoComponent } from './fenomenos-listado.component';

describe('FenomenosListadoComponent', () => {
  let component: FenomenosListadoComponent;
  let fixture: ComponentFixture<FenomenosListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FenomenosListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FenomenosListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
