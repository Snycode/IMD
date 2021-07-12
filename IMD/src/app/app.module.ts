import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BannerComponent } from './component/banner/banner.component';
import { FooterComponent } from './component/footer/footer.component';
import { AboutComponent } from './component/about/about.component';
import { ProductsComponent } from './component/products/products.component';
import { ContactsComponent } from './component/contacts/contacts.component';

//FIREBASE CONFING

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

//reactive form

import {ReactiveFormsModule} from '@angular/forms';
import { TrafficComponent } from './component/traffic/traffic.component';
import { MarketingComponent } from './component/marketing/marketing.component';
import { ButtonLeftComponent } from './component/button-left/button-left.component';
import { ButtonRightComponent } from './component/button-right/button-right.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    AboutComponent,
    ProductsComponent,
    ContactsComponent,
    TrafficComponent,
    MarketingComponent,
    ButtonLeftComponent,
    ButtonRightComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
