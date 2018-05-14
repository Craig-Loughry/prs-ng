import { Component, OnInit } from '@angular/core';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { UserService } from '../../../service/user.service';
import { User } from '../../../model/user';
import { SystemService } from '../../../service/system.service';


@Component({
  selector: 'app-purchaserequest-list',
  templateUrl: './purchaserequest-list.component.html',
  styleUrls: ['./purchaserequest-list.component.css']
})
export class PurchaseRequestListComponent implements OnInit {
    
purchaserequests: PurchaseRequest[] = [];
title: string = "Purchaserequest List";
user: User;

constructor(private purchaserequestSvc: PurchaseRequestService,
            private sysSvc: SystemService,
             private userSvc: UserService,
            ) { }

  ngOnInit() {
   this.purchaserequestSvc.list().subscribe(prs => {
        	this.purchaserequests = prs;
			this.populateUserName();
    	});
	  
		if(this.sysSvc.data.user.loggedIn){
			this.user = this.sysSvc.data.user.instance;
		}else{
			console.error("User not logged in.");
		}
  }
    populateUserName(): void {
    for (let pr of this.purchaserequests) {
        pr.UserName = pr.User.UserName;
    	}
	}
}