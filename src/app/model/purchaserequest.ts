import { User } from '../model/user';

export class PurchaseRequest {
        Id: number;
		User: User;
        UserName: string;
		Description: string;
		Justification: string;
		DateNeeded: Date;
		DeliveryMode: string;
		Status: string;
		Total: number;
		SubmittedDate: Date;
		ReasonForRejection: string;
    
    about(): string {
        return "User = "+this.User+", Description = "+this.Description+", Status = "+this.Status; 
    }
    
    constructor(inId = 0, U = null, Dsc: string = '', jst: string = '', dN: Date, dMo: string = '', st: string, ttl: number = 0, sD: Date, rFR: string = '') {
        
        this.Id = inId;
 		this.User = U;
		this.Description = Dsc;
		this.Justification = jst;
		this.DateNeeded = dN;
		this.DeliveryMode = dMo;
		this.Status = st;
		this.Total = ttl;
		this.SubmittedDate = sD;
		this.ReasonForRejection = rFR
    }
}