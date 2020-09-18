import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiAuthorizationModule} from './api-authorization/api-authorization.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { from } from 'rxjs';
import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataComponent,
    ExchangeRateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApiAuthorizationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
