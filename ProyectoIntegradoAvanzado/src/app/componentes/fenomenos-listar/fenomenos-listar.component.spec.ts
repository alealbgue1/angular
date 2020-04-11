import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FenomenosListarComponent } from './fenomenos-listar.component';

describe('FenomenosListarComponent', () => {
  let component: FenomenosListarComponent;
  let fixture: ComponentFixture<FenomenosListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FenomenosListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FenomenosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
