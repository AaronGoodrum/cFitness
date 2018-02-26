import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyAppComponent } from './components/body-app/body-app.component';
import { BodyComponent } from './components/body/body.component';
import { VipPassComponent } from './components/body/vip-pass/vip-pass.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    BodyAppComponent,
    BodyComponent,
    VipPassComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
