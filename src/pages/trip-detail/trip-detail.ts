import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {TripService} from "../../services/trip-service";
import {CheckoutTripPage} from "../checkout-trip/checkout-trip";

@Component({
  selector: 'page-trip-detail',
  templateUrl: 'trip-detail.html'
})
export class TripDetailPage {
  // trip info
  public trip: any;
  //alphaCode
  alphaCode: any;
  //
  numberResult: number;
  //
  resultDetaild: any = [];

  constructor(public nav: NavController, public tripService: TripService, public nacParms: NavParams) {
    //getAlphacode
    this.alphaCode = this.nacParms.get('alphaCode');
    this.getDetailByAlphaCode();
    console.log(this.alphaCode);
    
    // set sample data
    this.trip = tripService.getItem(1);
  }


  getDetailByAlphaCode(){
    this.tripService.getSatateByAlphaCode(this.alphaCode).subscribe(
      data => {
        console.log(data);
        this.numberResult = data.RestResponse.messages;
        this.resultDetaild = data.RestResponse.result;
      }, err => {
        console.log(err);
        
      }
    )
  }

 
}
