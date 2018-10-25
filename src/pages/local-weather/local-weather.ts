import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TripService } from '../../services/trip-service';
import { AlertController } from 'ionic-angular';
// import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'page-local-weather',
  templateUrl: 'local-weather.html'
})
export class LocalWeatherPage {
  code: any;
  numerOfItens: any;
  items: any = [];


  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    public tripService: TripService,
    public nacParms: NavParams
    ) {
      this.code = this.nacParms.get('code');
      console.log('code'+ this.code);
      this.getContriesBycode();
      
  }

  ionViewWillEnter() {

  }
  getContriesBycode(){
    this.tripService.getSatateByAlphaCode(this.code).subscribe(
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
  viewDetail() {
    this.presentAlert()
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Virtual Scroll',
      subTitle: 'Las vistas de listar usan virtual scroll de ionic la cual remplaza la paginacion',
      buttons: ['Dismiss']
    });
    alert.present();
  }
  

 
}
