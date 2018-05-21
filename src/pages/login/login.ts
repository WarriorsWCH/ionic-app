import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { BaseUI } from '../../common/baseui';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage extends BaseUI{

  mobile: any;
  password: any;
  errorMessage: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl:ViewController,
    public loadingCtrl: LoadingController,
    public rest: RestProvider,
    public toastCtrl: ToastController,
    public storage: Storage) {
     super();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    const loading = super.showLoading(this.loadingCtrl, '登录中...');
    this.rest.login(this.mobile, this.password).subscribe(
      f=>{
        console.log(f);
        if(f['Status'] == 'OK'){
          this.storage.set('userid',f['UserId']);
          loading.dismiss();
        } else {
          loading.dismiss();
          super.showToast(this.toastCtrl, f['StatusContent']);
        }
      },
      error=>this.errorMessage = <any>error); 
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
