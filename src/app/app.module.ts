import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { MenuComponent } from './core/menu/menu.component';
import { SystemService } from './service/system.service';
import { UserService } from './service/user.service';
import { VendorService } from './service/vendor.service';
import { ProductService } from './service/product.service';
import { PurchaseRequestService } from './service/purchaserequest.service';
import { PurchaseRequestLineItemService } from './service/purchaserequestlineitem.service';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { PurchaseRequestDetailComponent } from './feature/purchaserequest/purchaserequest-detail/purchaserequest-detail.component';
import { PurchaseRequestEditComponent } from './feature/purchaserequest/purchaserequest-edit/purchaserequest-edit.component';
import { PurchaseRequestCreateComponent } from './feature/purchaserequest/purchaserequest-create/purchaserequest-create.component';
import { PurchaseRequestListComponent } from './feature/purchaserequest/purchaserequest-list/purchaserequest-list.component';
import { PurchaseRequestLinesComponent } from './feature/purchaserequest/purchaserequest-lines/purchaserequest-lines.component';
import { PurchaseRequestLineItemCreateComponent } from './feature/purchaserequestlineitem/purchaserequestlineitem-create/purchaserequestlineitem-create.component';
import { PurchaseRequestLineItemEditComponent } from './feature/purchaserequestlineitem/purchaserequestlineitem-edit/purchaserequestlineitem-edit.component';
import { SortPipe } from './pipe/sort.pipe';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { PurchaseRequestApproveComponent } from './feature/purchaserequest/purchaserequest-approve/purchaserequest-approve.component';
import { PurchaseRequestReviewComponent } from './feature/purchaserequest/purchaserequest-review/purchaserequest-review.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AboutComponent,
    HomeComponent,
    MenuComponent,
    UserCreateComponent,
    UserDetailComponent,
    UserEditComponent,
    VendorListComponent,
    VendorCreateComponent,
    VendorDetailComponent,
    VendorEditComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    PurchaseRequestDetailComponent,
    PurchaseRequestEditComponent,
    PurchaseRequestCreateComponent,
    PurchaseRequestListComponent,
    PurchaseRequestLinesComponent,
    PurchaseRequestLineItemCreateComponent,
    PurchaseRequestLineItemEditComponent,
    SortPipe,
    UserLoginComponent,
    PurchaseRequestApproveComponent,
    PurchaseRequestReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
      UserService,
      VendorService,
      ProductService,
      PurchaseRequestService,
      SystemService,
      PurchaseRequestLineItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
