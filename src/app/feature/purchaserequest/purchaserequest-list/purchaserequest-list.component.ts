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
    
purchaserequests: PurchaseRequest[];
title: string = "Purchaserequest List";
user: User;

constructor(private purchaserequestSvc: PurchaseRequestService,
            private sysSvc: SystemService,
             private userSvc: UserService,
            ) { }

  ngOnInit() {
    console.log('Getting list of prs...');
    this.purchaserequestSvc.list().subscribe(purchaserequests => {
        this.purchaserequests = purchaserequests;
        console.log(purchaserequests);
    });
    // mock login - hardcoded for now for testing purposes
    console.log("mock login");
    this.userSvc.login("cloughry", "hello")
      .subscribe(users => {
        console.log("a",users.length);
        if(users.length > 0) {
			this.user = users[0];
            this.sysSvc.data.user.instance = this.user;
            this.sysSvc.data.user.loggedIn = true;
            console.log("SysSvc:", this.sysSvc.debug);
            
        }
    })
  }
}