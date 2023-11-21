import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

interface BasketItem {
  productId: number;
  quantity: number;
  price: number;
}

@Injectable()
export class BasketService {
  constructor(private readonly http: HttpClient) {}

  getAll() {
    return this.http.get(`${environment.apiUrl}Baskets/GetAll`);
  }

  addToBasket(item: BasketItem) {
    return this.http.post(`${environment.apiUrl}Baskets/AddToBasket`, item);
  }

  updateBasket(item: BasketItem) {
    return this.http.put(`${environment.apiUrl}Baskets/UpdateBasket`, item);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${environment.apiUrl}Baskets/DeleteProduct/${id}`);
  }
}
