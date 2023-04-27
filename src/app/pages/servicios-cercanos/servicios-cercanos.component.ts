/// <reference types="@types/googlemaps" />
import { Component, OnInit } from '@angular/core';
import { GeolocationService } from '../../services/geolocation.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-servicios-cercanos',
  templateUrl: './servicios-cercanos.component.html',
  styleUrls: ['./servicios-cercanos.component.scss'],
  imports: [FormsModule, CommonModule]
})
export class ServiciosCercanosComponent implements OnInit {
  nearbyPlaces: google.maps.places.PlaceResult[] = [];
  distance: number = 500;
  keyword: string = '';
  showResults: boolean = false;

  constructor(private geolocationService: GeolocationService) {}

  ngOnInit() {
    this.geolocationService.getCurrentPosition().subscribe(
      position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude; 

        // Utiliza la latitud y longitud para obtener los lugares cercanos
        // a través de la API de Google Places
        this.getNearbyPlaces(latitude, longitude, this.distance, this.keyword);
      },
      error => {
        // Manejar el error de geolocalización aquí
      }
    );
  }
  
  getPlaceImageUrl(place: google.maps.places.PlaceResult): string | undefined {
    return place.photos && place.photos.length > 0 ? place.photos[0].getUrl({ maxWidth: 200, maxHeight: 200 }) : undefined;
  }

  getPlaceMapUrl(place: google.maps.places.PlaceResult): string {
    const lat = place.geometry?.location.lat() || '';
    const lng = place.geometry?.location.lng() || '';
    return `https://www.google.com/maps?q=${lat},${lng}`;
  }

  applyFilters(): void {
    this.geolocationService.getCurrentPosition().subscribe(
      position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Aplica los filtros y obtiene los lugares cercanos
        this.getNearbyPlaces(latitude, longitude, this.distance, this.keyword);
      },
      error => {
        // Manejar el error de geolocalización aquí
      }
    );
    this.showResults = true;
  }

  getNearbyPlaces(latitude: number, longitude: number, distance: number, keyword: string): void {
    const location = new google.maps.LatLng(latitude, longitude);
    const map = new google.maps.Map(document.createElement('div'));
  
    const service = new google.maps.places.PlacesService(map);
    const request: google.maps.places.PlaceSearchRequest = {
      location: location,
      radius: distance,
      keyword: keyword,
    };
  
    service.nearbySearch(request, (results: google.maps.places.PlaceResult[], status: google.maps.places.PlacesServiceStatus) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.nearbyPlaces = results;
      } else {
        // Manejar el error al obtener lugares cercanos aquí
        console.error('Error al obtener lugares cercanos:', status);
      }
    });
    
  }
}