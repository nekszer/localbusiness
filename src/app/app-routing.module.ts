import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page'; // Asegúrate de crear TabsPage

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'map',
        loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
      },
      {
        path: 'favorites',
        loadChildren: () => import('./favorites/favorites.module').then( m => m.FavoritesPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: 'tabs/map',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'local',
    loadChildren: () => import('./local/local.module').then( m => m.LocalPageModule)
  },
  {
    path: '',
    redirectTo: 'tabs/map',
    pathMatch: 'full'
  },
  {
    path: 'restaurant',
    loadChildren: () => import('./pages/restaurant-form/restaurant-form.module').then( m => m.RestaurantFormPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
