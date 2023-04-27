import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fondo3dComponent } from './fondo3d.component';

describe('Fondo3dComponent', () => {
  let component: Fondo3dComponent;
  let fixture: ComponentFixture<Fondo3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fondo3dComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fondo3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
