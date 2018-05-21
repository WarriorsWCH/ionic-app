import {Component} from '@angular/core';
import { NavController, NavParams, ViewController, ToastController, LoadingController } from 'ionic-angular';
import {BaseUI} from '../../common/baseui';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({selector: 'page-register', templateUrl: 'register.html'})
export class RegisterPage extends BaseUI {

  mobile : any;
  nickName : any;
  password : any;
  confirmPassword : any;
  errorMessage: any;

  constructor(public navCtrl : NavController, 
    public navParams : NavParams, 
    public viewCtrl : ViewController,
    public loadingCtrl: LoadingController,
    public rest: RestProvider,
    public toastCtrl: ToastController) {
    super();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  doRegister() {
    if(this.password !== this.confirmPassword) {
      super.showToast(this.toastCtrl, '两次输入的密码不匹配。');
    } else {
      const loading = super.showLoading(this.loadingCtrl, '登录中...');
      this.rest.register(this.mobile, this.nickName, this.password).subscribe(
        f=>{
          console.log(f);
          if(f['Status'] == 'OK'){
            // this.storage.set('userid',f['UserId']);
            super.showToast(this.toastCtrl, '注册成功');
            loading.dismiss();
            this.dismiss();
          } else {
            loading.dismiss();
            super.showToast(this.toastCtrl, f['StatusContent']);
          }
        },
        error=>this.errorMessage = <any>error); 
    }
  }
  dismiss() {
    this.navCtrl.pop();
  }
}
