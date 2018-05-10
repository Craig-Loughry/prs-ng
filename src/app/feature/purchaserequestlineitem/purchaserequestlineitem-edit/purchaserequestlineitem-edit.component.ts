import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseRequestLineItem } from '../../../model/purchaserequestlineitem';
import { PurchaseRequestLineItemService } from '../../../service/purchaserequestlineitem.service';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { Product } from '../../../model/product';
import { ProductService } from '../../../service/product.service';
import { SystemService } from '../../../service/system.service';
import { VendorService } from '../../../service/vendor.service';

@Component({
  selector: 'app-purchaserequestlineitem-edit',
  templateUrl: './purchaserequestlineitem-edit.component.html',
  styleUrls: ['./purchaserequestlineitem-edit.component.css']
})
export class PurchaseRequestLineItemEditComponent implements OnInit {
    title: string = "Purchaserequestlineitem Edit";
    Id: number;
    resp: any;
    purchaserequest: PurchaseRequest;
    purchaserequestid: number;
    product: Product;
    products: Product[];
    prli: PurchaseRequestLineItem = new PurchaseRequestLineItem(0, this.purchaserequest, this.product,0);
    
  constructor(private purchaserequestlineitemSvc: PurchaseRequestLineItemService,
  						private purchaserequestSvc: PurchaseRequestService, 
  						private productSvc: ProductService,
                        private sysSvc: SystemService,
  						private route: ActivatedRoute,
  						private router: Router) { }

  ngOnInit() {
      this.route.params.subscribe(parms => {
  		this.Id = parms['id'];
  		this.purchaserequestid = parms['purchaserequestid'];
  	});
      this.purchaserequestlineitemSvc.get(this.Id)
        .subscribe(purchaserequestlineitems => {
          this.prli = purchaserequestlineitems.length > 0 ? purchaserequestlineitems [0] :
          null;
   });
      this.productSvc.list ()
        .subscribe(products => {
  		this.products = products
   });
  }
}