import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../model/user';
import { UserService} from '../../../service/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
    
title: string = "User Create";
resp: any;
user: User = new User(0,'','','','','','',false,false);
    
    create () {
        console.log('create a user...');
        console.log(this.user);
        this.UserSvc.create(this.user)
        .subscribe(resp => {
        this.resp = resp;
        console.log("User-Create:", this.resp);
        this.router.navigate(['/user/list']);
    });
    }
  constructor(private UserSvc: UserService,
              private router: Router) { }

  ngOnInit() {
  }

}
