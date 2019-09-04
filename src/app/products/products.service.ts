import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { IProduct } from "./products";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private productUrl = "api/products/products.json";
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl)
  }
}
