import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import{ ProductService } from '../../../service/product.service';
import { Product } from '../../../model/product';
import{ VendorService } from '../../../service/vendor.service';
import { Vendor } from '../../../model/vendor';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

 title: string = 'Product Edit';
    id: string;
    resp: any;
    product: Product;
    vendors: Vendor[];
    
  constructor(private productSvc: ProductService,
              private vendorSvc: VendorService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params.subscribe(parms => this.id =
      parms['id']);
      this.vendorSvc.list().subscribe(vendors => this.vendors = vendors);
      this.productSvc.get(this.id)
        .subscribe(products => {
          this.product = products.length > 0 ? products [0] :
          null;
          console.log("product:  "+this.product);     
      });
  }
    change() {
        this.productSvc.change(this.product)
        .subscribe(resp => {
            this.resp = resp;
            this.router.navigate(['/product/list']);
        });
    }
compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
}
}