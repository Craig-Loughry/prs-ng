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
    request: PurchaseRequest;
    lines: PurchaseRequestLineItem [];
    resp: any;
    reasonForRejection: string = "";
    
  constructor(private prliSvc: PurchaseRequestLineItemService,
               private purchaserequest: PurchaseRequestService,
               private router: Router,
               private route: ActivatedRoute
              ) { }

  ngOnInit() {
  }

}
