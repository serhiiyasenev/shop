import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [ AppComponent, FirstComponent, ProductComponent ],
  imports: [ BrowserModule, AppRoutingModule ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
