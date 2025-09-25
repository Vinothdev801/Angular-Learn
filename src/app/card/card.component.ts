import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../services/product-service';
import { Product } from '../product/Product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  products: Product[] = []
  constructor(productService: ProductService){
    console.log(productService.getProducts());

    this.products = productService.getProducts()
  }
}
