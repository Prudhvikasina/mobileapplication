import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegComponent } from './reg/reg.component';
import { LoginComponent } from './login/login.component';
import { WeluserComponent } from './weluser/weluser.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [AppComponent,RegComponent,LoginComponent,WeluserComponent,SignupComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
