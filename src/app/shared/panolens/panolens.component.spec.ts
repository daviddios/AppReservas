import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanolensComponent } from './panolens.component';

describe('PanolensComponent', () => {
  let component: PanolensComponent;
  let fixture: ComponentFixture<PanolensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanolensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanolensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
