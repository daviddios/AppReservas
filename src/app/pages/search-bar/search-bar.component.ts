import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  standalone:true,
  selector: 'app-search-bar',
  imports: [
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule   ],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchTerm: string = '';
  selectedService: string = '';
  selectedDate: Date = new Date();
  selectedTime: string = '';

  services = [
    { name: 'Restaurante' },
    { name: 'Emplazamiento deportivo' },
    { name: 'Peluquería' },
    { name: 'Abogado' },
    // ...más servicios...
  ];

  times = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
    // ...más horas...
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(): void {
    // Aquí puedes manejar lo que sucede cuando se realiza la búsqueda. 
    // Podrías, por ejemplo, enviar los datos de búsqueda a un servicio para obtener los resultados.
    console.log(`Buscando servicio: ${this.searchTerm}, Servicio: ${this.selectedService}, Fecha: ${this.selectedDate}, Hora: ${this.selectedTime}`);
  }
}
