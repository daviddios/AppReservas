import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosCercanosComponent } from './servicios-cercanos.component';

describe('ServiciosCercanosComponent', () => {
  let component: ServiciosCercanosComponent;
  let fixture: ComponentFixture<ServiciosCercanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosCercanosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosCercanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
