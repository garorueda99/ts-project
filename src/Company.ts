import faker from "faker"

export class Company {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }
    constructor(){
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location={
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
        // this.location.lat = parse faker.address.latitude(); 
        //initialization
        
    }
    markerContent(): string{
     return `
     <h2>Company name: ${this.companyName}</h2>
     <h3>Catchphrase: ${this.catchPhrase}<h3>
     `       
    }
}