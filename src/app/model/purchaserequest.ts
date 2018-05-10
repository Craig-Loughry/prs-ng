export class PurchaseRequest {
        Id: number;
		User: string;
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
    
    constructor(inId = 0, User: string = '', Dsc: string = '', jst: string = '', dN: Date, dMo: string = '', st: string, ttl: number = 0, sD: Date, rFR: string = '') {
        
        this.Id = inId;
 		this.User = User;
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