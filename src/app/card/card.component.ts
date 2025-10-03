import { LocalProductsService } from './../services/productApiService';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


import { ProductApi } from '../services/productApiService';
import { ApiProduct, Product } from '../product/Product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  Apiproducts: ApiProduct[] = []; // products from fake api
  products: Product[] = []; // products from local storage.

  constructor(productApi: ProductApi, localproducts: LocalProductsService) {
    productApi.getAllProducts().subscribe((products) => (this.Apiproducts = products)); // products from api

    // products from localstorage.
    this.products = localproducts.getAllProducts();
    console.log(this.products);
  }
}
