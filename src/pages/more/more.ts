import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  private notLogin: boolean = true;
  private logined: boolean = false;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    // 导入ModalController 弹出页面
    public modalCtrl: ModalController,
    public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }

  showModal() {
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }

  ionViewDidEnter() {
    this.loadUserPage();
  }
  loadUserPage() {
    this.storage.get('userid').then((val)=>{
      if(val != null){
        this.notLogin = false;
        this.logined = true;
      } else {
        this.notLogin = true;
        this.logined = false;
      }
    })
  }
}
