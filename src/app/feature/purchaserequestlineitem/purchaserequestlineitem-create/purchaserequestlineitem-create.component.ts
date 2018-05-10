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
  selector: 'app-purchaserequestlineitem-create',
  templateUrl: './purchaserequestlineitem-create.component.html',
  styleUrls: ['./purchaserequestlineitem-create.component.css']
})

export class PurchaseRequestLineItemCreateComponent implements OnInit {
    title: string = "Purchaserequestlineitem List";
    resp: any;
    purchaserequest: PurchaseRequest;
    purchaserequestid: number;
    product: Product;
    products: Product[];
    prli: PurchaseRequestLineItem = new PurchaseRequestLineItem(0, this.purchaserequest, this.product,0);

    compareFn(u1: Product, u2: Product) {
    return u1 && u2 ? u1.Id == u2.Id : u1 == u2;
  }
  create() {
      
    this.prli.PurchaseRequest = this.purchaserequest;
    this.purchaserequestlineitemSvc.create(this.prli)
        .subscribe(resp => {
    this.resp = resp;
    this.router.navigateByUrl('/purchaserequest/lines/'+this.purchaserequestid);
     console.log(this.prli);

    });
  }
    
  constructor(private purchaserequestlineitemSvc: PurchaseRequestLineItemService,
  						private purchaserequestSvc: PurchaseRequestService, 
  						private productSvc: ProductService,
                        private sysSvc: SystemService,
  						private route: ActivatedRoute,
  						private router: Router) { }

   ngOnInit() {
  	this.route.params.subscribe(parms => {
  		this.purchaserequestid = parms["id"];
  		this.purchaserequestSvc.get(this.purchaserequestid)
  			.subscribe(purchaseRequests => {
  				this.purchaserequest = purchaseRequests.length > 0 ? purchaseRequests[0] : null;
  			});
  	});
  	this.productSvc.list()
  		.subscribe(ProductService => {
        this.products = ProductService;
      });
  }
}
