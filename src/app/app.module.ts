import { HeadfacePage } from './../pages/headface/headface';
import { UserPage } from './../pages/user/user';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { DiscoveryPage } from '../pages/discovery/discovery';
import { ChatPage } from '../pages/chat/chat';
import { NotificationPage } from '../pages/notification/notification';
import { MorePage } from '../pages/more/more';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { RegisterPage } from '../pages/register/register';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { FilePath } from '@ionic-native/file-path';
import { FileTransfer} from '@ionic-native/file-transfer';
import { DetailsPage } from '../pages/details/details';
import { QuestionPage } from '../pages/question/question';
import { AnswerPage } from '../pages/answer/answer';
import { ChatdetailsPage } from '../pages/chatdetails/chatdetails';
import { EmojiProvider } from '../providers/emoji/emoji';
import { ComponentsModule } from '../components/components.module';
import { RelativetimePipe } from '../pipes/relativetime/relativetime';
import { ChatserviceProvider } from '../providers/chatservice/chatservice';
import { UserdatalistPage } from '../pages/userdatalist/userdatalist';
import { SettingsProvider } from '../providers/settings/settings';

@NgModule({
  declarations: [
    MyApp,
    DiscoveryPage,
    ChatPage,
    NotificationPage,
    MorePage,
    HomePage,
    LoginPage,
    RegisterPage,
    UserPage,
    HeadfacePage,
    TabsPage,
    DetailsPage,
    QuestionPage,
    AnswerPage,
    ChatdetailsPage,
    RelativetimePipe,
    UserdatalistPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '返回'
    }),
    IonicStorageModule.forRoot(),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DiscoveryPage,
    ChatPage,
    NotificationPage,
    MorePage,
    HomePage,
    LoginPage,
    RegisterPage,
    UserPage,
    HeadfacePage,
    TabsPage,
    DetailsPage,
    QuestionPage,
    AnswerPage,
    ChatdetailsPage,
    UserdatalistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    File,
    FileTransfer,
    FilePath,
    Camera,
    EmojiProvider,
    ChatserviceProvider,
    SettingsProvider
  ]
})
export class AppModule {}
