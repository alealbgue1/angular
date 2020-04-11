import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FenomenosAddComponent } from './fenomenos-add.component';

describe('FenomenosAddComponent', () => {
  let component: FenomenosAddComponent;
  let fixture: ComponentFixture<FenomenosAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FenomenosAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FenomenosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
