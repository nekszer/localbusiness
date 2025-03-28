import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private auth: AuthService) {
    // Maneja el callback después del login
    this.auth.handleRedirectCallback().subscribe({
        next: () => console.log("Redirección manejada correctamente"),
        error: (err: any) => { },
    });
  }
}
