import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = JSON.parse(localStorage.getItem('products') || '[]')

  // add product to the products list
  addProduct(product: any){
    this.products.push(product);
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  // get products
  getProducts(){
    return this.products;
  }

  // get count
  getCount(){
    return localStorage.getItem('products')?.length || 0;
  }
}
