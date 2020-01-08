import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {LocationService} from "../../services/location.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  map: google.maps.Map;
  private coordinates: google.maps.LatLng;
  private mapOptions: google.maps.MapOptions;

  constructor(private location: LocationService) { }

  ngAfterViewInit(){
    this.location.getLatLon()
      .then((latlong) => this.populatemap(latlong))
      .catch((err) => this.populatemap([0,0]));
  }

  populatemap(mylocation: [number, number]){
    this.coordinates = new google.maps.LatLng(mylocation[0], mylocation[1]);
    this.mapOptions = {
      center: this.coordinates,
      zoom: 8
    }
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    //show where I am
    let icon = {
      url: "/assets/my_location_indicator.png",
      scaledSize: new google.maps.Size(30, 30),
    }

    let myLocationMarker = new google.maps.Marker({
      clickable: false,
      draggable: false,
      position: {lat: mylocation[0], lng: mylocation[1]},
      icon: icon
    });
    //myLocationMarker.setIcon('/assets/my_location_indicator.png');
    myLocationMarker.setMap(this.map);
    //get close by people
  }

}
