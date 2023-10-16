import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stand2Component } from './stand2.component';

describe('Stand2Component', () => {
  let component: Stand2Component;
  let fixture: ComponentFixture<Stand2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Stand2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stand2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
