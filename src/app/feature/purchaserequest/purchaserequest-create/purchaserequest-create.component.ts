import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { UserService } from '../../../service/user.service';
import { User } from '../../../model/user';
import { SystemService } from '../../../service/system.service';

@Component({
  selector: 'app-purchaserequest-create',
  templateUrl: './purchaserequest-create.component.html',
  styleUrls: ['./purchaserequest-create.component.css']
})
export class PurchaseRequestCreateComponent implements OnInit {
    title: string = "Purchaserequest List";
    resp: any;
    purchaserequest: PurchaseRequest = new PurchaseRequest (0,'','','',null,'','',0,null,'');
    //users: User[];  5/7/18 - replacing this w/ mock login
    
    create () {
        console.log(this.purchaserequest);
        this.purchaserequestSvc.create(this.purchaserequest)
        .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/purchaserequest/list']);
         });
    }

  constructor(private purchaserequestSvc: PurchaseRequestService,
              private sysSvc: SystemService,
              private userSvc: UserService, 
              private router: Router) { }

  ngOnInit() {
        // mock login will use authenticatedUser rather than list of users
//      this.userSvc.list().subscribe(users => {
//                                    console.log(users);
//                                    this.users = users;
      if(this.sysSvc.data.user.loggedIn) {
  		this.purchaserequest.User = this.sysSvc.data.user.instance;
  	} else {
  		console.error("User not logged in.");
  	}

  } 
}
