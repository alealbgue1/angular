import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerDetallesComponent } from './owner-detalles.component';

describe('OwnerDetallesComponent', () => {
  let component: OwnerDetallesComponent;
  let fixture: ComponentFixture<OwnerDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
