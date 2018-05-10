import { Product } from './product';
import { PurchaseRequest } from './purchaserequest';

export class PurchaseRequestLineItem {
        Id: number;
		PurchaseRequest: PurchaseRequest;
		Product: Product;
		Quantity: number;
    
    about(): string {
        return "Id = "+this.Id+", Product = "+this.Product+", Quantity = "+this.Quantity; 
    }
    
    constructor(inId: number, pr: PurchaseRequest, p: Product, qty: number) {
        
        this.Id = inId;
 		this.PurchaseRequest = pr;
		this.Product = p;
		this.Quantity = qty;
    }
}