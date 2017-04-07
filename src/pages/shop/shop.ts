import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BuyoutPage } from "../buyout/buyout";

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {
	constructor (private navCtrl: NavController) {}

	onBuy() {
		this.navCtrl.push(BuyoutPage);
	}
}
