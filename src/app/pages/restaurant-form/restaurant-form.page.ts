import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.page.html',
  styleUrls: ['./restaurant-form.page.scss'],
  standalone: false
})
export class RestaurantFormPage implements OnInit {

  constructor(private geolocation: Geolocation) { }

  ngOnInit() {
  }

  restaurant = {
    coverImage: '',
    location: { lat: 0, lng: 0 },
    name: 'El Rey Rosticería',
    description: 'Restaurante especializado en pollo',
    whatsapp: '+525587654321',
    address: 'Aldama 131, Centro, 56100 Texcoco de Mora, Méx.'
  };

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });
    this.restaurant.coverImage = image.webPath || '';
  };

  async selectLocation() {
    try {
      const position = await this.geolocation.getCurrentPosition((position) => {
        this.restaurant.location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    } catch (error) {
      console.error('Error getting location', error);
    }
  }

}
