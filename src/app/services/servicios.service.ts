import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servicio } from '../interfaces/servicio';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private apiUrl = 'https://your-api-url.com/api/servicios';

  constructor(private http: HttpClient) { }

  getServiciosCercanos(latitude: number, longitude: number): Observable<Servicio[]> {
    const url = `${this.apiUrl}/cercanos?lat=${latitude}&lng=${longitude}`;
    return this.http.get<Servicio[]>(url);
  }
}
