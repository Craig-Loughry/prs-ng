import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products: Product[];
title: string = "Product List";

constructor(private productSvc: ProductService) { }

  ngOnInit() {
      this.productSvc.list().subscribe(products => {
                                    console.log(products);
                                    this.products = products;
  }
);
  } 
}
