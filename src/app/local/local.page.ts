import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.page.html',
  styleUrls: ['./local.page.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class LocalPage implements OnInit {

  constructor(private location : Location) {}

  ngOnInit(): void {
      
  }

  // Lista de platillos con imágenes
  dishes = [
    {
      title: 'Hamburguesa Clásica',
      description: 'Deliciosa hamburguesa con queso, lechuga, tomate y salsa especial.',
      price: 8.99,
      image: 'assets/sushito.jpeg', // Ruta de la imagen
    },
    {
      title: 'Pizza Margarita',
      description: 'Pizza con salsa de tomate, mozzarella fresca y albahaca.',
      price: 10.99,
      image: 'assets/sushito.jpeg', // Ruta de la imagen
    },
    {
      title: 'Tacos al Pastor',
      description: 'Tacos de cerdo marinado con piña, cebolla y cilantro.',
      price: 7.99,
      image: 'assets/sushito.jpeg', // Ruta de la imagen
    },
    {
      title: 'Ensalada César',
      description: 'Ensalada con pollo a la parrilla, croutones y aderezo César.',
      price: 6.99,
      image: 'assets/sushito.jpeg', // Ruta de la imagen
    },{
      title: 'Hamburguesa Clásica',
      description: 'Deliciosa hamburguesa con queso, lechuga, tomate y salsa especial.',
      price: 8.99,
      image: 'assets/sushito.jpeg', // Ruta de la imagen
    },
    {
      title: 'Pizza Margarita',
      description: 'Pizza con salsa de tomate, mozzarella fresca y albahaca.',
      price: 10.99,
      image: 'assets/sushito.jpeg', // Ruta de la imagen
    },
    {
      title: 'Tacos al Pastor',
      description: 'Tacos de cerdo marinado con piña, cebolla y cilantro.',
      price: 7.99,
      image: 'assets/sushito.jpeg', // Ruta de la imagen
    },
    {
      title: 'Ensalada César',
      description: 'Ensalada con pollo a la parrilla, croutones y aderezo César.',
      price: 6.99,
      image: 'assets/sushito.jpeg', // Ruta de la imagen
    },
  ];

  // Función para agregar al carrito
  addToCart(dish: any) {
    console.log('Agregado al carrito:', dish);
  }

  goBack () : void {
    this.location.back();
  }
}
