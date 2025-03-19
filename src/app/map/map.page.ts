import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

 
  map!: L.Map;

  constructor(private router: Router) {}

  ngOnInit(): void { }

  ionViewDidEnter() : void { this.initMap(); }

  isMapInitialized : boolean = false;

  initMap() : void {
    if(this.isMapInitialized)
      return;

    this.isMapInitialized = true;
    this.map = L.map('map').setView([19.4326, -99.1332], 13); // Coordenadas de la CDMX

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(this.map);


    // Definir íconos personalizados
    const customIcon1 = L.icon({
      iconUrl: 'assets/icon/store.png', // Ruta a la primera imagen
      iconSize: [25, 25], // Tamaño del ícono
      iconAnchor: [12, 41], // Punto de anclaje del ícono
      popupAnchor: [1, -34], // Punto de anclaje del popup
    });

    // Coordenadas de los marcadores
    const markers: Array<any> = [
      {
        id: 1,
        coords: [ 19.4326, -99.1332 ], // Zócalo
        icon: customIcon1,
        title: "Sushito"
      }
    ];

    // Añadir marcadores al mapa
    markers.forEach((markerInfo) => {
      const marker = L.marker(markerInfo.coords, { icon: markerInfo.icon, title: markerInfo.title }).addTo(this.map);

      // Mostrar el título como tooltip
      marker.bindTooltip(markerInfo.title, {
        permanent: true, // El tooltip no es permanente (solo se muestra al pasar el cursor)
        direction: 'bottom' // Dirección del tooltip
      });

      marker.addEventListener("click", (sender) => {
        this.router.navigate(['/local', { id: markerInfo.id }]);
      });
    });
  }

  /** Remove map when we have multiple map object */
  ngOnDestroy() : void {
    this.map.remove();
  }

}
