import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular/navigation/nav-controller';

@Component({
	selector: 'page-buyout',
	templateUrl: 'buyout.html'
})
export class BuyoutPage {
	productData: {name: string, quantity: number, cost: number};

	constructor (private navParams: NavParams, private navCtrl: NavController) {
		this.productData = this.navParams.data;
	}

	onConfirmPurchase() {
		this.navCtrl.popToRoot();
	}
}