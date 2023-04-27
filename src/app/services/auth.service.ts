import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;

  login(email: string, password: string): Observable<boolean> {
    // Simulamos una autenticación con un delay de 1 segundo
    return of(true).pipe(
      delay(1000),
      tap(() => {
        this.isLoggedIn = true;
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}