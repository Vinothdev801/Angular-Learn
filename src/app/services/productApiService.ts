import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Product } from "../product/Product.interface";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class ProductApi {
    private http = inject(HttpClient);
    private URL = "https://fakestoreapi.com/products"

    getAllProducts(): Observable<Product[]>{
        return this.http.get<Product[]>(this.URL);
    }

    getProductById(id: number){
        return this.http.get(`${this.URL}/${id}`);
    }
}