import { CommonModule } from '@angular/common';
import { ProductService } from './../../services/product-service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css'
})
export class AddProduct {

  prodName: string = '';
  prodImage: string = '';
  prodPrice: number = 0;

  constructor(private prodService:ProductService){}

  addProduct(){
    const product =
      {
        name: this.prodName,
        imageurl: this.prodImage,
        price: this.prodPrice,
      }

    this.prodService.addProduct(product);

    alert(`${this.prodName} Product Added successfully.`)
  }
}
