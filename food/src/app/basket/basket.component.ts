import { Component, OnInit } from '@angular/core';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements OnInit {
  basket!: any[];
  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    this.getBasket();
  }

  getBasket() {
    this.basketService.getAll().subscribe((basket: any) => {
      this.basket = basket;
    });
  }

  changeQuantity(q: number, index: number) {
    if (this.basket[index].quantity + q == 0) {
      return;
    }

    this.basket[index].quantity += q;

    this.basketService
      .updateBasket({
        productId: this.basket[index].product.id,
        quantity: this.basket[index].quantity,
        price: this.basket[index].price,
      })
      .subscribe((b) => {});
  }

  deleteItem(productId: number, index: number) {
    return this.basketService.deleteProduct(productId).subscribe((b) => {
      this.basket.splice(index, 1);
    });
  }

  totalPrice() {
    let total = 0;

    if (this.basket) {
      for (let i = 0; i < this.basket.length; i++) {
        total += this.basket[i].product.price * this.basket[i].quantity;
      }
    }

    return total;
  }
}
