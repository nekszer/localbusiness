import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Auth0Service } from '../services/auth.service';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false
})
export class ProfilePage implements OnInit {

  // Variable para almacenar el estado de autenticación
  isLoggedIn: boolean = false;

  name: string | undefined = '';
  mail: string | undefined = '';
  image: string | undefined= '';

  constructor(
    private alertController: AlertController,
    private router: Router,
    private auth0Service: Auth0Service
  ) {
    // Suscribirse al estado de autenticación de Auth0
  }

  ngOnInit(): void {

    this.auth0Service.checkAuthState(); // Verifica la sesión al cargar

    this.auth0Service.isAuthenticated$.pipe(
      tap((isAuthenticated: any) => console.log('Auth state:', isAuthenticated))
    ).subscribe((isAuthenticated) => {
      this.isLoggedIn = isAuthenticated;
    });

    this.auth0Service.user$.subscribe(user => {
      console.log(user);
      this.name = user?.name;
      this.mail = user?.email;
      this.image = user?.picture;
    });
  }

  login() : void {
    this.auth0Service.login();
  }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Cerrar Sesión',
      message: '¿Estás seguro de que quieres cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Cerrar Sesión',
          handler: () => {
            // Lógica para cerrar sesión
            this.auth0Service.logout();
            this.router.navigate(['/profile']); // Redirige al login
          },
        },
      ],
    });

    await alert.present();
  }

}