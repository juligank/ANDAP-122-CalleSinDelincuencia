import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { RegistroPage } from '../registro/registro';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
    this.navCtrl.setRoot(TabsPage)
  }
  Registro(){
    this.navCtrl.setRoot(RegistroPage)
  }


}
