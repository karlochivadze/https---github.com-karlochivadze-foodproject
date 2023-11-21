import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { BasketComponent } from './basket/basket.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
