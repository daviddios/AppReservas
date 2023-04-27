import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DetalleServicioComponent } from './pages/detalle-servicio/detalle-servicio.component';
import { ReservarCitaComponent } from './pages/reservar-cita/reservar-cita.component';
import { ServiciosCercanosComponent } from './pages/servicios-cercanos/servicios-cercanos.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { RecuperarContrasenhaComponent } from './pages/recuperar-contrasenha/recuperar-contrasenha.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'servicios-cercanos', component: ServiciosCercanosComponent },
  { path: 'reservas', component: ReservarCitaComponent },
  // { path: 'perfil', component: PerfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
