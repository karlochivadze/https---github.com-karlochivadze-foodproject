import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CategoryModel } from '../models/category';
import { Observable } from 'rxjs';
import { ProductByCategory } from '../models/product';

@Injectable()
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(
      `${environment.apiUrl}Categories/GetAll`
    );
  }

  getByCategoryId(categoryId: number): Observable<ProductByCategory> {
    return this.http.get<ProductByCategory>(
      `${environment.apiUrl}Categories/GetCategory/${categoryId}`
    );
  }
}
