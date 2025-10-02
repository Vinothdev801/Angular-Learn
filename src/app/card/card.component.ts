import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


import { ProductApi } from '../services/productApiService';
import { Product } from '../product/Product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  products: Product[] = [];
  constructor(productApi: ProductApi) {
    productApi.getAllProducts().subscribe((products) => (this.products = products));
  }
}
