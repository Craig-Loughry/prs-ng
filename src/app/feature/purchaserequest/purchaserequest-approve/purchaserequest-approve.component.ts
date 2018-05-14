import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../../../model/user';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { PurchaseRequestLineItem } from '../../../model/purchaserequestlineitem';
import { PurchaseRequestLineItemService } from '../../../service/purchaserequestlineitem.service';
import { SystemService } from '../../../service/system.service';

@Component({
  selector: 'app-purchaserequest-approve',
  templateUrl: './purchaserequest-approve.component.html',
  styleUrls: ['./purchaserequest-approve.component.css']
})
export class PurchaseRequestApproveComponent implements OnInit {
    title: string = 'Approve/Reject PR';
    id: number;
    user: User;
    prId: number;
    purchaserequest: PurchaseRequest;
    lines: PurchaseRequestLineItem [];
    resp: any;
    reasonForRejection: string = "";
    
  constructor( private purchaserequestSvc: PurchaseRequestService,
                private prliSvc: PurchaseRequestLineItemService,
               private sysSvc: SystemService,
               private router: Router,
               private route: ActivatedRoute
              ) { }

  ngOnInit() {
      this.route.params.subscribe(parms => this.id = parms["id"]);
       this.route.params.subscribe(parms => this.prId = parms['del']);                           
  		this.purchaserequestSvc.get(this.id)
  			.subscribe(requests => {
  				this.purchaserequest = requests.length > 0 ? requests[0] : null;
  			})

      this.prliSvc.listByPR(this.id)
  		.subscribe(purchaserequestlineitems => {
        this.lines = purchaserequestlineitems
          ;})
  }
	approve(){
		this.purchaserequestSvc.approve(this.purchaserequest).subscribe(resp => {
			this.resp = resp;
			console.log("purchaserequest-Accept: ", this.resp);
			this.router.navigate(['/purchaserequest/review/{{this.id}}']);
		});
	}
	
	reject(){
		console.log(this.purchaserequest);
		this.purchaserequest.ReasonForRejection = this.reasonForRejection;
		this.purchaserequestSvc.reject(this.purchaserequest).subscribe(resp => {
			this.resp = resp;
			console.log("purchaserequest-Accept: ", this.resp);
			this.router.navigate(['/purchaserequest/review/{{this.id}}']);
		});
	}
}
