import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false
})
export class ProfilePage implements OnInit {

  isLoggedId : boolean = false;

  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.isLoggedId = true;
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
            this.router.navigate(['/login']); // Redirige al login
          },
        },
      ],
    });

    await alert.present();
  }

}
