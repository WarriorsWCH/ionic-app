import { Component } from '@angular/core';
import { IonicPage, normalizeURL, NavController, NavParams, ViewController, ToastController, ModalController, LoadingController, ActionSheetController, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { BaseUI } from '../../common/baseui';
import { RestProvider } from '../../providers/rest/rest';

//导入四个外部加载进来的组件，具体的安装方法在 09-01 章节
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

/**
 * Generated class for the HeadfacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({selector: 'page-headface', templateUrl: 'headface.html'})
export class HeadfacePage extends BaseUI {

  userId: string;
  errorMessage: string;
  lastImage: string = null;
  constructor(public navCtrl : NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    public rest: RestProvider,
    public storage: Storage,
    public actionSheetCtrl: ActionSheetController,
    public camera: Camera,
    public transfer: FileTransfer,
    public file: File,
    public filePath: FilePath,
    public platform: Platform,
    public toastCtrl: ToastController,
    public viewCtrl: ViewController) {
      super();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeadfacePage');
  }
  presentActionSheet() {
    let actionSheet = this
      .actionSheetCtrl
      .create({
        title: '选择图片',
        buttons: [
          {
            text: '从图片库中选择',
            handler: () => {
              // this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
            }
          },
          {
            text: '使用相机',
            handler: () => {
              // this.takePicture(this.camera.PictureSourceType.CAMERA);
            }
          },
          {
            text: '取消',
            role: 'cancel'
          }
        ]
      });
    actionSheet.present();
  }
}