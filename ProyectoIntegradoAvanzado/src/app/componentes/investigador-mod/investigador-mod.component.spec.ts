import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigadorModComponent } from './investigador-mod.component';

describe('InvestigadorModComponent', () => {
  let component: InvestigadorModComponent;
  let fixture: ComponentFixture<InvestigadorModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestigadorModComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigadorModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
