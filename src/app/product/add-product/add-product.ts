import { CommonModule } from '@angular/common';
import { ProductService } from './../../services/product-service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../navbar/navbar.component';


@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, CommonModule, NavbarComponent],
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
        title: this.prodName,
        image: this.prodImage,
        price: this.prodPrice,
      }

    this.prodService.addProduct(product);

    alert(`${this.prodName} Product Added successfully.`)
  }
}
