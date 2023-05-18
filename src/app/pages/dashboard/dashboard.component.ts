import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Notification {
  id: number;
  message: string;
}

interface Service {
  id: number;
  name: string;
  description: string;
}

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [CommonModule]
})
export class DashboardComponent implements OnInit {
  public username!: string;
  public appointments!: string[];
  public notifications!: Notification[];
  public services!: Service[];

  ngOnInit(): void {
    this.username = 'Usuario1';

    // Mock data
    this.appointments = [
      'Cita con el abogado el 1 de mayo',
      'Reserva en el restaurante el 3 de mayo',
      'Cita con el peluquero el 5 de mayo',
      // Agrega más citas según sea necesario
    ];

    this.notifications = [
      { id: 1, message: 'La reserva en el restaurante ha sido confirmada' },
      { id: 2, message: 'La cita con el abogado ha sido cancelada' },
      // Agrega más notificaciones según sea necesario
    ];

    this.services = [
      { id: 1, name: 'Restaurantes', description: 'Reserva una mesa en tu restaurante favorito' },
      { id: 2, name: 'Emplazamientos deportivos', description: 'Reserva una cancha de fútbol o un gimnasio' },
      { id: 3, name: 'Peluquerías', description: 'Reserva una cita para un corte de pelo' },
      { id: 4, name: 'Abogados', description: 'Programa una consulta con un abogado' },
      // Agrega más servicios según sea necesario
    ];
  }
}
