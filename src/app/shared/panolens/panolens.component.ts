import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import * as PANOLENS from 'panolens';


@Component({
  standalone: true,
  selector: 'app-panolens',
  templateUrl: './panolens.component.html',
  styleUrls: ['./panolens.component.scss']
})
export class PanolensComponent implements OnInit {
  @ViewChild('panolensContainer', { static: true }) panolensContainer!: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit(): void {
    this.initPanolens();
  }

  initPanolens(): void {
    const container = this.panolensContainer.nativeElement;
    const image = '../../../assets/360-1.jpg'; // Asegúrate de poner tu imagen en la carpeta assets

    const viewer = new PANOLENS.Viewer({ container: container });
    const littlePlanetImage = new PANOLENS.LittlePlanet( image, { autoRotate: true } );

    viewer.add( littlePlanetImage );
  }
}