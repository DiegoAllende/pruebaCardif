import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAuhtComponent } from './layout-auht.component';

describe('LayoutAuhtComponent', () => {
  let component: LayoutAuhtComponent;
  let fixture: ComponentFixture<LayoutAuhtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LayoutAuhtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutAuhtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
