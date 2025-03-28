import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root',
})
export class Auth0Service {
  constructor(public auth: AuthService) {}

  // Método para verificar la sesión
  checkAuthState() {
    this.auth.getAccessTokenSilently().subscribe({
      next: (token) => {
        console.log("Token renovado:", token); // Si llega aquí, la sesión es válida
      },
      error: (err) => {
        console.log("No hay sesión activa:", err); // Sesión inválida o expirada
      },
    });
  }

  // Método para iniciar sesión
  login() {
    this.auth.loginWithRedirect();
  }

  // Método para cerrar sesión
  logout() {
    this.auth.logout({ logoutParams: { returnTo: window.location.origin } });
  }

  // Método para verificar si el usuario está autenticado
  get isAuthenticated$() {
    return this.auth.isAuthenticated$;
  }

  // Método para obtener el perfil del usuario
  get user$() {
    return this.auth.user$;
  }
}