import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigadorAnadeComponent } from './investigador-anade.component';

describe('InvestigadorAnadeComponent', () => {
  let component: InvestigadorAnadeComponent;
  let fixture: ComponentFixture<InvestigadorAnadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestigadorAnadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigadorAnadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
