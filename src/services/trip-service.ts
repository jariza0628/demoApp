import { Injectable } from "@angular/core";
import { TRIPS } from "./mock-trips";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class TripService {
  private trips: any;

  constructor(public http: HttpClient) {
    this.trips = TRIPS;
  }

  getAll() {
    return this.trips;
  }
  getAllCountries() {
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
     headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
  return this.http.get('http://services.groupkt.com/country/get/all', { headers: headers }).map((res: any) => res);
}

getItem(id) {
  for (var i = 0; i < this.trips.length; i++) {
    if (this.trips[i].id === parseInt(id)) {
      return this.trips[i];
    }
  }
  return null;
}

remove(item) {
  this.trips.splice(this.trips.indexOf(item), 1);
}
//http://services.groupkt.com/state/get/IND/all
/**
 * 
 * @param code example IND
 */
  getSatateByAlphaCode(code){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
    return this.http.get('http://services.groupkt.com/state/get/'+code +'/all', { headers: headers }).map((res: any) => res);
  }
}
