export interface GetProductsResponse {
  id: number;
  name: string;
  price: number;
  nuts: string;
  image: string;
  vegetarian: string;
  spiciness: number;
  categoryId: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  nuts: string;
  image: string;
  vegetarian: string;
  spiciness: number;
  categoryId: number;
}

export class ProductByCategory {
  id!: number;
  name!: string;
  products!: Product[];
}
