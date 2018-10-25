import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {TripService} from "../../services/trip-service";
import {TripDetailPage} from "../trip-detail/trip-detail";

@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})
export class TripsPage {
  // list of trips
  public trips: any;
  items: any = [];
  alphaCode: any;
  numerOfItens: number;
  constructor(public nav: NavController, public tripService: TripService,public nacParms: NavParams) {
    
    // set sample data

    this.trips = tripService.getAll();
    this.tripService.getAllCountries().subscribe(
      data => {
        //this.numerOfItens = data.RestResponse.messages;
        this.items = data.RestResponse.result;
        this.numerOfItens = this.items.length;
        console.log(this.items );
      },
      err =>{
        console.log(err);
      }
    )
  }

  // view trip detail
  viewDetail(code) {
    this.nav.push(TripDetailPage, {alphaCode: code});
  }
  
}
