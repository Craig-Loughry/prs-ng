export class Product {
     Id: number;
	 Vendor: string;
	 PartNumber: string;
	 Name: string;
	 Price: number;
	 Unit:string;
	 PhotoPath: string;

     about(): string {
        return "Vendor = "+this.Vendor+", Name = "+this.Name+", Price="+this.Price;
    }
	constructor(inId = 0, vnd: string = '', pn: string = '', nam: string = '', prc: number = 0, un: string ='', ph: string = '') {
        
        this.Id = inId;
		this.Vendor = vnd;
		this.PartNumber = pn;
		this.Name = nam;
		this.Price = prc;
		this.Unit = un;
		this.PhotoPath = ph;

	}
}