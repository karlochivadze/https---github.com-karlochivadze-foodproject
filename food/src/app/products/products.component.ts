import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil, } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { CategoriesService } from '../services/categories.service';
import { CategoryModel } from '../models/category';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
 
  products: Product[] = [];
  categories: CategoryModel[] = [];
  private destroy$ = new Subject<void>();
  

  spiciness: string = '0';
  nuts: boolean = false;
  vegeterian: boolean = false;

  selectedCategory: number = 0;


  constructor(
    private prodactService: ProductsService,
    private categoryService: CategoriesService,
    private basketService: BasketService,
    
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.getCategories();
    
  }

  getAllProducts() {
    this.prodactService
      .getAllProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe((products) => {
        this.products = products;
      });
  }

  getCategories() {
    this.categoryService.getAll().subscribe((categories) => {
      this.categories = categories;
    });
  }

  getByCategory(categoryId: number) {
    this.selectedCategory = categoryId;
    // this.categoryService
    //   .getByCategoryId(categoryId)
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((products) => {
    //     this.products = products.products;
    //   });
    this.filterProducts();
  }

  filterProducts() {
    this.prodactService
      .filterProducts(
        this.nuts,
        this.vegeterian,
        this.spiciness,
        this.selectedCategory
      )
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }

  addToBasket(product: Product) {
    this.basketService
      .addToBasket({
        productId: product.id,
        quantity: 1,
        price: product.price,
      })
      .subscribe((res) => {
        console.log(res);
      });
  }

  resetFilters() {
    this.spiciness = '0';
    this.nuts = false;
    this.vegeterian = false;
    this.selectedCategory = 0;
    this.getAllProducts();
  }

  setSpiciness(event: any) {
    this.spiciness = event.target.value;
  }

  setNuts(event: any) {
    this.nuts = event.target.checked;
  }

  setVegetarian(event: any) {
    this.vegeterian = event.target.checked;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

