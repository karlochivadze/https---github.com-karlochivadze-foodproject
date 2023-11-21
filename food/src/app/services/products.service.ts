import { Injectable } from '@angular/core';
import { GetProductsResponse, Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<GetProductsResponse[]>(
      `${environment.apiUrl}Products/GetAll`
    );
  }

  filterProducts(
    nuts: boolean = false,
    vegetarian: boolean = false,
    spiciness: string,
    categoryId: number
  ) {
    return this.http.get<Product[]>(
      `${
        environment.apiUrl
      }Products/GetFiltered?nuts=${nuts}&vegetarian=${vegetarian}&spiciness=${
        spiciness != '0' ? spiciness : ''
      }&categoryId=${categoryId ? categoryId : ''}`
    );
  }
}
