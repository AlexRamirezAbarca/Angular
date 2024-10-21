import { Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { log } from 'node:console';

interface MarkerAndColor {
  color : string;
  marker : Marker
}

interface PlainMarker{
  color : string;
  lngLat : number[];
}


@Component({
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent {

  @ViewChild('map') divMap?: ElementRef;

  public markers : MarkerAndColor[] = [];

  public zoom: number = 10;
  public map?: Map;
  public lngLat: LngLat = new LngLat(-79.89728739275154, -2.205353846389329);

  ngAfterViewInit(): void {

    if (!this.divMap) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    this.readFormLocalStorage();
  }


  createMarker(){
    if(!this.map) return;

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const LngLat = this.map.getCenter()

    this.addMarker( LngLat,color);
  }

  addMarker(lngLat : LngLat, color : string) {

    if(!this.map) return;

    const marker = new Marker(
      {
        color: color,
        draggable:true
      })
      .setLngLat(lngLat)
      .addTo(this.map);

      this.markers.push ({color,marker});
      this.saveToLocalStorage();

      marker.on('dragend', () => {
        this.saveToLocalStorage();
      })
  }

  deleteMarker(index : number){
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);
  }


  flyTo(marker : Marker){

    if(!this.map) return;

    this.map.flyTo({
      zoom: 14,
      center: marker.getLngLat()
    })

  }

  saveToLocalStorage(){
      const plainMarkers: PlainMarker[] =  this.markers.map(({color, marker})=> {
        return {
          color,
          lngLat: marker.getLngLat().toArray()
        }
      });

      localStorage.setItem('plainMarkers', JSON.stringify(plainMarkers));
  }


  readFormLocalStorage(){


    const plainMarkersString = localStorage.getItem('plainMarkers') ?? '[]';
    const plainMarkers : PlainMarker[] = JSON.parse(plainMarkersString);

    plainMarkers.forEach ( ({ color, lngLat}) => {
      const [lng , lat ] = lngLat;
      const coords = new LngLat (lng, lat);

      this.addMarker(coords, color);
    })


  }



}
