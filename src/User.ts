import faker from "faker"

export class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    }
    constructor(){
        this.name = faker.company.companyName();
        this.location={
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
        // this.location.lat = parse faker.address.latitude(); 
        //initialization
    }
}