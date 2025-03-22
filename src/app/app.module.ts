import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatecustomerComponent } from './createcustomer/createcustomer.component';
import { HomeComponent } from './home/home.component';
import { CusteditComponent } from './custedit/custedit.component';
import { CustlistComponent } from './custlist/custlist.component';
import { HttpClientModule } from '@angular/common/http';
import { CustService } from './cust.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreatecustomerComponent,
    HomeComponent,
    CusteditComponent,
    CustlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CustService],
  bootstrap: [AppComponent]
})
export class AppModule { }
