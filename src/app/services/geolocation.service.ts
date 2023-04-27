import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  constructor() {}

  getCurrentPosition(): Observable<GeolocationPosition> {
    return new Observable((observer: Observer<GeolocationPosition>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            observer.next(position);
            observer.complete();
          },
          error => {
            observer.error(error);
          }
        );
      } else {
        observer.error('Geolocation not supported in this browser');
      }
    });
  }
}
