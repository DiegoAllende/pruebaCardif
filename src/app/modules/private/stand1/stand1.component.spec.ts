import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stand1Component } from './stand1.component';

describe('Stand1Component', () => {
  let component: Stand1Component;
  let fixture: ComponentFixture<Stand1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Stand1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stand1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
