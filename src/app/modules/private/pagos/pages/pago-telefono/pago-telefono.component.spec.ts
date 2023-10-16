import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoTelefonoComponent } from './pago-telefono.component';

describe('PagoTelefonoComponent', () => {
  let component: PagoTelefonoComponent;
  let fixture: ComponentFixture<PagoTelefonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoTelefonoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagoTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
