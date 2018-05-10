import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { PurchaseRequestLineItemService } from '../../../service/purchaserequestlineitem.service';
import { PurchaseRequestLineItem } from '../../../model/purchaserequestlineitem';

@Component({
  selector: 'app-purchaserequest-review',
  templateUrl: './purchaserequest-review.component.html',
  styleUrls: ['./purchaserequest-review.component.css']
})
export class PurchaseRequestReviewComponent implements OnInit {
    title: string = 'Approve/Reject PR';
    id: string;
    prliId: string;
    purchaserequest: PurchaseRequest;
    lines: PurchaseRequestLineItem [];
    resp: any;
    reasonForRejection: string = "";
    
  constructor(private prliSvc: PurchaseRequestLineItemService,
               private purchaserequestSvc: PurchaseRequestService,
               private router: Router,
               private route: ActivatedRoute
              ) { }

  ngOnInit() {
        this.route.params.subscribe(parms => this.id = parms['id']);
  	    this.purchaserequestSvc.get(this.id)
  		.subscribe(purchaserequests => {
        this.purchaserequest = purchaserequests.length > 0 ? purchaserequests[0] : null;
  });

     this.prliSvc.listByPR(this.id)
         .subscribe(prlis => {
         this.lines = prlis
     });
  }
   approve() {
       this.purchaserequestSvc.approve(this.purchaserequest)
       .subscribe(res => {
         this.router.navigateByUrl('/purhaserequest/review') 
   ;})
   }
    reject() {
            this.purchaserequestSvc.approve(this.purchaserequest)
       .subscribe(res => {
         this.router.navigateByUrl('/purhaserequest/review') 
   });
       } 
}