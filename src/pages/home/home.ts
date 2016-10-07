import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isActive: boolean = true;

  constructor(public navCtrl: NavController) { }

  on() {
    this.isActive = true;
  }

  off() {
    this.isActive = false;
  }
}
