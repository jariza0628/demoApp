import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {Storage} from '@ionic/storage';
import { TripService } from "../../services/trip-service";

// import {SearchCarsPage} from "../search-cars/search-cars";

@Component({
  selector: 'page-search-location',
  templateUrl: 'search-location.html'
})

export class SearchLocationPage {
  public items: any;
  public fromto: any;
  // places
  public places = {
    nearby: [
      {
        id: 1,
        name: "Current Location"
      },
      {
        id: 2,
        name: "Rio de Janeiro, Brazil"
      },
      {
        id: 3,
        name: "São Paulo, Brazil"
      },
      {
        id: 4,
        name: "New York, United States"
      },
      {
        id: 5,
        name: "London, United Kingdom"
      },
      {
        id: 6,
        name: "Same as pickup"
      }
    ],
    recent: [
      {
        id: 1,
        name: "Rio de Janeiro"
      }
    ]
  };

  constructor(private storage: Storage, public nav: NavController, public navParams: NavParams, public tripService: TripService) {
    this.fromto = this.navParams.data;
    this.getAllContries();
  }
  getAllContries(){
    this.tripService.getAllCountries().subscribe(
      data => {
       
        this.items = data.RestResponse.result;
        console.log(this.items );
      },
      err =>{
        console.log(err);
      }
    )
  }
  // search by item
  searchBy(item) {
    if (this.fromto === 'from') {
      this.storage.set('pickup', item.alpha3_code);
    }

    if (this.fromto === 'to') {
      this.storage.set('dropOff', item.alpha3_code);
    }
    // this.nav.push(SearchCarsPage);
    this.nav.pop();
  }
}
