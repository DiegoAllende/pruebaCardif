import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InyeccionesComponent } from './inyecciones.component';

describe('InyeccionesComponent', () => {
  let component: InyeccionesComponent;
  let fixture: ComponentFixture<InyeccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ InyeccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InyeccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
