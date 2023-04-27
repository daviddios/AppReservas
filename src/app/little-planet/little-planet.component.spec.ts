import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittlePlanetComponent } from './little-planet.component';

describe('LittlePlanetComponent', () => {
  let component: LittlePlanetComponent;
  let fixture: ComponentFixture<LittlePlanetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LittlePlanetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LittlePlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
