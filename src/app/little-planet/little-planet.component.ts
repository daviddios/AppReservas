import { Component} from '@angular/core';
import { View360Options, LittlePlanetProjection } from "@egjs/view360";
import { EASING, NgxView360Module } from "@egjs/ngx-view360";
@Component({

  standalone: true,
  selector: 'app-little-planet',
  templateUrl: './little-planet.component.html',
  styleUrls: ['./little-planet.component.scss'],
  imports: [NgxView360Module]

})
export class LittlePlanetComponent {
  options: Partial<View360Options> = {
    autoResize: true,
    autoplay: {
      delay: 0,
      canInterrupt: true,
      delayOnMouseLeave: 0,
    },
    rotate: {
      pointerScale: [ 50,50 ],
      easing: EASING.LINEAR,
      duration: 10000

    },
    initialPitch: -90,
    initialZoom: 1.8,
    projection: new LittlePlanetProjection({
      src: '../../assets/360-1.JPG',
    })
  }
}