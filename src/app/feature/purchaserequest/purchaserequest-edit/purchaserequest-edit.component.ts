import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import{ PurchaseRequestService } from '../../../service/purchaserequest.service';
import { PurchaseRequest } from '../../../model/purchaserequest';
import{ UserService } from '../../../service/user.service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-purchaserequest-edit',
  templateUrl: './purchaserequest-edit.component.html',
  styleUrls: ['./purchaserequest-edit.component.css']
})
export class PurchaseRequestEditComponent implements OnInit {
title: string = 'Purchaserequest Edit';
    id: string;
    resp: any;
    purchaserequest: PurchaseRequest;
    users: User[];
    
change() {
    this.purchaserequestSvc.change(this.purchaserequest)
    .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/purchaserequest/list']);
        });
    }
      remove() {
  this.purchaserequestSvc.remove(this.purchaserequest.Id)
    .subscribe(resp => {
      this.resp = resp;
      this.router.navigate(['/purchaserequest/list']);
    });
      }
  constructor(private purchaserequestSvc: PurchaseRequestService,
  						private userSvc: UserService,
  						private router: Router,
  						private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id =
      parms['id']);
      this.purchaserequestSvc.get(this.id)
        .subscribe(purchaserequests => {
          this.purchaserequest = purchaserequests.length > 0 ? purchaserequests [0] :
          null;
          console.log("purchaserequest:  "+this.purchaserequest);     
      });
  }

}
