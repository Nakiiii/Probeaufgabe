import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { DevicesComponent } from './components/devices/devices.component';
import { DeviceComponent } from './components/device/device.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import { DetailViewComponent } from './components/detail-view/detail-view.component';
import { DeviceViewComponent } from './components/device-view/device-view.component'

const webRoutes: Routes = [
  {path: 'detail/:id', component: DetailViewComponent},
  {path: '', component: DeviceViewComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    DevicesComponent,
    DeviceComponent,
    DetailViewComponent,
    DeviceViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(webRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
