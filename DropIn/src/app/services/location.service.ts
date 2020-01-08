import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private location: any;

  constructor(private http:HttpClient) {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        this.location = position.coords;
        console.log(this.location);
      });
    }
    else{
      console.log("There has been an issue getting navigation location");
    }
  }

  public async getLatLon(): Promise<[number, number]>{
    return new Promise<[number, number]>((res, rej) => {
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
          res([position.coords.latitude, position.coords.longitude]);
        })
      } else {
        rej();
      }
    });
  }

  /*public getLatLon(): [number, number]{
    try{;
      return [this.location.latitude, this.location.longitude];
    } catch(err) {
      console.error(err);
      return [0, 0];
    }
  }*/
}
