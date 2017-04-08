import { Component } from '@angular/core';
import { UsersPage } from '../users/users';
import { ShopPage } from '../shop/shop';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usrPage = UsersPage;
  shpPage = ShopPage;

  constructor (private navCtrl: NavController) {

  }

  onGoToUsers() {
  	this.navCtrl.push(this.usrPage)
  		.catch((error) => console.log('Access denied. Argument was ' + error));
  }

}
