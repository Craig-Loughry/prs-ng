import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { PurchaseRequest } from '../../../model/purchaserequest';

@Component({
  selector: 'app-purchaserequest-detail',
  templateUrl: './purchaserequest-detail.component.html',
  styleUrls: ['./purchaserequest-detail.component.css']
})
export class PurchaseRequestDetailComponent implements OnInit {
    
title: string = 'Purchaserequest Detail';
	id: string;
    resp: any;
	purchaserequest: PurchaseRequest;
    
	remove() {
    console.log('pr remove for id: ', this.purchaserequest.Id);
    this.purchaserequestSvc.remove(this.purchaserequest.Id)
      .subscribe(resp => {
        this.resp = resp;
        console.log("Purchaserequest-Detail-Remove:", this.resp);
        this.router.navigate(['/purchaserequest/list']);
      });
	}
    review() {
        this.update(); 
    }
     update() {
    this.purchaserequestSvc.submitForReview(this.purchaserequest)
      .subscribe(resp => {
        this.resp = resp;
        console.log("Purchaserequest-Review:", this.resp);
        this.router.navigate(['/purchaserequest/list']);
      });

  }
  constructor(private purchaserequestSvc: PurchaseRequestService,
  						private router: Router,
  						private route: ActivatedRoute) { }

  ngOnInit() {
       	this.route.params.subscribe(parms => this.id = parms['id']);
  	    this.purchaserequestSvc.get(this.id)
  		.subscribe(purchaserequests => {
        this.purchaserequest = purchaserequests.length > 0 ? purchaserequests[0] : null;
        console.log(this.purchaserequest)
  ;})
  }                  
}
