import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(public modalCtrl: ModalController) {
	}

	presentModal() {
		let modal = this.modalCtrl.create(ModalPage);
		modal.present();
	}

}
