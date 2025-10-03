import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { ApiProduct, Product } from "../product/Product.interface";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class ProductApi {
    private http = inject(HttpClient);
    private URL = "https://fakestoreapi.com/products"

    getAllProducts(): Observable<ApiProduct[]>{
        return this.http.get<ApiProduct[]>(this.URL);
    }

    getProductById(id: number){
        return this.http.get(`${this.URL}/${id}`);
    }
}


@Injectable({providedIn: 'root'})
export class LocalProductsService{

  products: Product[] = [];

  constructor(){
    try{
      const productsLength = localStorage.getItem('products')?.length ?? 0;

      if(productsLength > 0){
        this.products = JSON.parse(localStorage.getItem('products') || '[]');
      } else{
        console.log('products empty.');

      }
    } catch(e){}
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(productId: number): Product | undefined {
    return this.products.find((product, index) => index === productId);
  }
}
