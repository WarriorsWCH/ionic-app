import { UserPage } from './../user/user';
import { RestProvider } from './../../providers/rest/rest';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ToastController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { BaseUI } from '../../common/baseui';

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
export class MorePage extends BaseUI{

  notLogin: boolean = true;
  logined: boolean = false;
  headFace: string;
  userinfo: string[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    // 导入ModalController 弹出页面
    public modalCtrl: ModalController,
    public storage: Storage,
    public toastCtrl: ToastController,
    public loadCtrl: LoadingController,
    public rest: RestProvider) {
    super();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }

  showModal() {
    let modal = this.modalCtrl.create(LoginPage);
    //关闭后的回调
    modal.onDidDismiss(() => {
      this.loadUserPage();
    });
    modal.present();
  }

  ionViewDidEnter() {
    this.loadUserPage();
  }
  loadUserPage() {
    this.storage.get('UserId').then((val)=>{
      if(val != null){
        const loading = super.showLoading(this.loadCtrl, '加载中...');
        this.rest.getUserInfo(val).subscribe(userinfo => {
          this.userinfo = userinfo;
          this.headFace = userinfo['UserHeadface']+ "?" + (new Date()).valueOf();
          this.notLogin = false;
          this.logined = true;
          loading.dismiss();
        });
      } else {
        this.notLogin = true;
        this.logined = false;
      }
    })
  }

  goToUserPage() {
    this.navCtrl.push(UserPage);
  }
}
