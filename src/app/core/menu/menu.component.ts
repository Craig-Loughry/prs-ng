import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { User } from '../../model/user';
import { SystemService } from '../../service/system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    user: User;
    Id: number = 0;
    menuItems: Menu[] = [
        new Menu('Home', '/home', 'This is the home menu item'),
        new Menu('Users', '/user/list', 'This is the user list menu item'),
        new Menu('Vendors', '/vendor/list', 'This is the vendor list menu'),
        new Menu('Products', '/product/list', 'This is the product list menu'),
        new Menu("Requests","/purchaserequest/list","This is the pr menu item"),
        new Menu("Review","/purchaserequest/review/"+this.Id,"This is the pr review menu item"),       new Menu('About', '/about', 'This is the home menu item'),
        new Menu('Login', '/user/login', 'This is the login'),
    ]
  constructor(private sysSvc: SystemService) { }

  ngOnInit() {
       	if(this.sysSvc.data.user.loggedIn){
		this.user = this.sysSvc.data.user.instance;
		this.Id= this.user.Id;
	}else{
		console.error("User not logged in.");
	};
	  
  }

}

