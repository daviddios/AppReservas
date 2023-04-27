import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import * as PANOLENS from 'panolens';



@Component({
  standalone: true,
  selector: 'app-fondo3d',
  templateUrl: './fondo3d.component.html',
  styleUrls: ['./fondo3d.component.scss']
})
export class Fondo3dComponent implements OnInit {
  @ViewChild('panolensContainer', { static: true }) panolensContainer!: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit(): void {
    this.initPanolens();
  }

  initPanolens(): void {
    const container = this.panolensContainer.nativeElement;
    const image = 'src/assets/360-1.JPG'; // Asegúrate de poner tu imagen en la carpeta assets

    const viewer = new PANOLENS.Viewer({ container: container });
    const littlePlanetImage = new PANOLENS.LittlePlanet( image, { autoRotate: true } );

    viewer.add( littlePlanetImage );
  }
}