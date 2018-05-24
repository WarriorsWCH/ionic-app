import { HeadfacePage } from './../headface/headface';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController, ViewController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { BaseUI } from '../../common/baseui';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage extends BaseUI{
  headFace: string = 'http://img.mukewang.com/user/57a322f00001e4ae02560256-40-40.jpg?';
  userinfo: string[];
  nickName: string = '加载中...';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage,
    public toastCtrl: ToastController,
    public loadCtrl: LoadingController,
    public rest: RestProvider,
    public viewCtrl: ViewController,) {
      super();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }
  ionViewDidEnter() {
    this.loadUserPage();
  }
  loadUserPage() {
    this.storage.get('userid').then((val)=>{
      if(val != null){
        const loading = super.showLoading(this.loadCtrl, '加载中...');
        this.rest.getUserInfo(val).subscribe(userinfo => {
          this.userinfo = userinfo;
          this.headFace = userinfo['UserHeadface']+ "?" + (new Date()).valueOf();
          this.nickName = userinfo['UserNickName'];
          loading.dismiss();
        });
      }
    })
  }
  gotoHeadface() {
    this.navCtrl.push(HeadfacePage);
  }
  updateNickName() {
    this.storage.get('userid').then((val)=>{
      if(val != null){
        const loading = super.showLoading(this.loadCtrl, '修改中...');
        this.rest.updateNickName(val, this.nickName).subscribe(f => {
          if(f['Status'] == 'OK'){
            loading.dismiss();
            super.showToast(this.toastCtrl, "昵称修改成功。");
          } else {
            loading.dismiss();
            super.showToast(this.toastCtrl, f['StatusContent']);
          }
        });
      }
    })
  }
  logout() {
    this.storage.remove('userid');
    // this.viewCtrl.dismiss();
    this.navCtrl.pop();
  }
}
