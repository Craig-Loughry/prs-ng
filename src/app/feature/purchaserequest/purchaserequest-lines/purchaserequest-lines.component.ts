import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { PurchaseRequestLineItemService } from '../../../service/purchaserequestlineitem.service';
import { PurchaseRequestLineItem } from '../../../model/purchaserequestlineitem';
import { Product } from '../../../model/product';

@Component({
  selector: 'app-purchaserequest-lines',
  templateUrl: './purchaserequest-lines.component.html',
  styleUrls: ['./purchaserequest-lines.component.css']
})
export class PurchaseRequestLinesComponent implements OnInit {
  title: string = 'PurchaseRequest Line Items';
  id: string;
  prliId: string = '0';
  purchaserequest: PurchaseRequest;
  lines: PurchaseRequestLineItem[];
  resp: any;
    
  constructor(private purchaserequestSvc: PurchaseRequestService,
              private purchaserequestlineitemSvc: PurchaseRequestLineItemService,
              private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit() {
      this.route.params.subscribe(parms => this.id = parms["id"]);
       this.route.params.subscribe(parms => this.prliId = parms['del']);                           
  		this.purchaserequestSvc.get(this.id)
  			.subscribe(requests => {
  				this.purchaserequest = requests.length > 0 ? requests[0] : null;
  			})

      this.purchaserequestlineitemSvc.listByPR(this.id)
  		.subscribe(purchaserequestlineitems => {
        this.lines = purchaserequestlineitems
          ;})
  }

change() {
    this.purchaserequestSvc.change(this.purchaserequest)
    .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/purchaserequest/list']);
        });
}
remove() {
  this.purchaserequestlineitemSvc.remove(this.prliId)
    .subscribe(resp => {
      this.resp = resp;
      this.router.navigate(['/purchaserequest/lines/'+this.id]);
      this.ngOnInit();
    });
      }
}