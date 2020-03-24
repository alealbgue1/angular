import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FenomenosAnadeComponent } from './fenomenos-anade.component';

describe('FenomenosAnadeComponent', () => {
  let component: FenomenosAnadeComponent;
  let fixture: ComponentFixture<FenomenosAnadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FenomenosAnadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FenomenosAnadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
