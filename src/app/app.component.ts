import { DashboardPage } from './../pages/dashboard/dashboard';

import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from './../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;
  pages: Array<{title:string, component:any}>;
    
  constructor(public platform: Platform,public statusBar: StatusBar,public splashScreen: SplashScreen) {
      this.initializeApp();

      this.pages=[
        {title:'Login',component:LoginPage},
        {title:'Dashboard', component:DashboardPage}
      ];
  }

  initializeApp(){
    this.platform.ready().then(()=>{
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page){
    this.nav.setRoot(page.component);
  }
}

