import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { NgxView360Module } from '@egjs/ngx-view360';
import { LittlePlanetComponent } from 'src/app/little-planet/little-planet.component';


@Component({
    standalone: true,
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    imports: [CommonModule, FormsModule, NgxView360Module, LittlePlanetComponent]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.email, this.password).subscribe(
      (result) => {
        if (result) {
          this.router.navigate(['/dashboard']);
        } else {
          this.error = 'Credenciales inválidas';
        }
      },
      (error) => {
        this.error = 'Ha ocurrido un error al intentar iniciar sesión';
      }
    );
  }
}