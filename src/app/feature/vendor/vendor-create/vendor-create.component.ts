import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorService } from '../../../service/vendor.service';
import { Vendor } from '../../../model/vendor';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {
    title: string = "Vendor Create";
    resp: any;
    vendor: Vendor = new Vendor (0,'','','','','','','','',false)

     create () {
        console.log('create a vendor...');
        console.log(this.vendor);
        this.VendorSvc.create(this.vendor)
        .subscribe(resp => {
        this.resp = resp;
        console.log("Vendor-Create:", this.resp);
        this.router.navigate(['/vendor/list']);
         });
    }
  constructor(private VendorSvc: VendorService,
              private router: Router) { }

  ngOnInit() {
  }

}
