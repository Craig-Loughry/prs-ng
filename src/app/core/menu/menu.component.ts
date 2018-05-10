import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    menuItems: Menu[] = [
        new Menu('Home', '/home', 'This is the home menu item'),
        new Menu('User List', '/user/list', 'This is the user list menu item'),
        new Menu('Vendor List', '/vendor/list', 'This is the vendor list menu'),
        new Menu('Product List', '/product/list', 'This is the product list menu'),
        new Menu('PurchaseRequest List', '/purchaserequest/list', 'This is the PurchaseRequest list menu'),
        new Menu('Login', '/user/login', 'This is the login'),
        new Menu('About', '/about', 'This is the home menu item')
    ]
  constructor() { }

  ngOnInit() {
  }

}

