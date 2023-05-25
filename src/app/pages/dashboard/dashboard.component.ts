import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SearchBarComponent } from "../../shared/search-bar/search-bar.component";
import { MatExpansionModule } from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';

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
    imports: [CommonModule, FormsModule, MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule, SearchBarComponent, MatExpansionModule, MatListModule
      ]
})
export class DashboardComponent implements OnInit {

public username!: string;
public appointments!: string[];
public notifications!: Notification[];
public services!: Service[];
public searchTerm!: string;
public selectedService!: string;
public selectedTime!: string;
public selectedDate!: Date;
public mostrarNotificaciones: boolean = false;
public times: string[] = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];


ngOnInit(): void {
  this.username = 'Juan Manuel';

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
onItemClick(v: String) {
  console.log(v)
}
onSearch(): void {
    console.log('Término de búsqueda:', this.searchTerm);
    // Aquí puedes implementar la lógica para buscar
  }
}
