import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesService } from './services/categories.service';
import { ProductsService } from './services/products.service';
import { BasketService } from './services/basket.service';
import { BasketComponent } from './basket/basket.component';
import { HomeComponent } from './home/home.component';
import { LoaderComponent } from './loader/loader.component'; 
import { DataService } from './data.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ProductsComponent, BasketComponent, HomeComponent, LoaderComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CategoriesService, ProductsService, BasketService,DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
