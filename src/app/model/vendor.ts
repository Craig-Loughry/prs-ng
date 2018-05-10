	export class Vendor{
    Id: number;
	Code: string;
	Name: string;
	Address: string;
	City: string;
	State: string;
	Zip: string;
	PhoneNumber: string;
	Email: string;
	PreApproved: boolean;

about(): string {
     return "Name = "+this.Name+", City = "+this.City+", State="+this.State;
    }
	constructor(inId: number = 0, code: string = '', nm: string = '',adr: string = '',ct: string = '',
                st: string = '', zip: string = '', ph: string = '', em: string = '',prA: boolean = false) {

		this.Id = inId;
		this.Code = code;
		this.Name = nm;
		this.Address = adr;
		this.City = ct;
		this.State = st;
		this.Zip = zip;
		this.PhoneNumber = ph;
		this.Email = em;
		this.PreApproved = prA;
    }
}