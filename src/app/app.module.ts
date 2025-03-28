import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Importa el módulo de Auth0
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    // Configura el módulo de Auth0
    AuthModule.forRoot({
      domain: 'dev-r9s27qpv.us.auth0.com', // Reemplaza con tu dominio de Auth0
      clientId: 'wMmv1QxgT2maH6o2cOqXf70iWSG7IA9y', // Reemplaza con tu Client ID de Auth0
      cacheLocation: 'localstorage', // 👈 Persistencia en localStorage
      useRefreshTokens: true,       // 👈 Opcional: Habilita refresh tokens
      authorizationParams: {
        redirect_uri: window.location.origin
      },
    }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
