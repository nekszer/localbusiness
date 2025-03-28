import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'local',
    loadChildren: () => import('./local/local.module').then(m => m.LocalPageModule)
  },
  {
    path: 'restaurant',
    loadChildren: () => import('./pages/restaurant-form/restaurant-form.module').then(m => m.RestaurantFormPageModule)
  },
  {
    path: '',
    redirectTo: 'tabs/map',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { 
      preloadingStrategy: PreloadAllModules,
      // Opcional: configuración adicional para evitar problemas
      enableTracing: false // Cambia a true para debug en desarrollo
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}