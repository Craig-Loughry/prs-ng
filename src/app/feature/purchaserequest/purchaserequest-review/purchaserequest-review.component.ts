import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { UserService } from '../../../service/user.service';
import { User } from '../../../model/user';
import { SystemService } from '../../../service/system.service'
import { SortPipe } from '../../../pipe/sort.pipe';

@Component({
  selector: 'app-purchaserequest-review',
  templateUrl: './purchaserequest-review.component.html',
  styleUrls: ['./purchaserequest-review.component.css']
})
export class PurchaseRequestReviewComponent implements OnInit {
    title: string = 'Review PR';
    request: PurchaseRequest[] = [];
    sortBy: string = 'Id'
    user: User;
    id: number = 0;

    
  constructor(private userSvc: UserService,
               private purchaserequestSvc: PurchaseRequestService,
               private sysSvc: SystemService,
               private router: Router,
               private route: ActivatedRoute
              ) { }

  ngOnInit() {
 	if(this.sysSvc.data.user.loggedIn){
		this.user = this.sysSvc.data.user.instance;
		this.id= this.user.Id;
	}else{
		console.error("User not logged in.");
	};
	  
	this.purchaserequestSvc.listForReview(this.id).subscribe(prs => {
		this.request = prs;
        console.log(prs);
		this.populateUserName();
	});
  }
  populateUserName(): void {
    for (let pr of this.request) {
      pr.UserName = pr.User.UserName;
    }
  }
  setSortBy(column: string): void {
    this.sortBy = column;
  }
}
