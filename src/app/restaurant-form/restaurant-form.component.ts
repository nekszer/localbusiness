import { Component } from '@angular/core';
// import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.scss'],
  standalone: false
})
export class RestaurantFormComponent {
  restaurant = {
    coverImage: '',
    location: { lat: 0, lng: 0 },
    name: 'El Rey Rosticería',
    description: 'Restaurante especializado en pollo',
    whatsapp: '+525587654321',
    address: 'Aldama 131, Centro, 56100 Texcoco de Mora, Méx.',
    rating: 5.0,
    reviews: 10
  };

  // constructor(private geolocation: Geolocation) {}

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });
    this.restaurant.coverImage = image.webPath || '';
  };

  /*
  async selectLocation() {
    try {
      const position = await this.geolocation.getCurrentPosition();
      this.restaurant.location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
    } catch (error) {
      console.error('Error getting location', error);
    }
  }
    */
}