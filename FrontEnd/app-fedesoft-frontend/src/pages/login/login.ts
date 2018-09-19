import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistryPage } from '../registry/registry';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  usuario: string;
  password: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  Ingresar() {
    this.navCtrl.setRoot(HomePage)
  }
  Registro(){
    this.navCtrl.setRoot(RegistryPage)
  }


}
