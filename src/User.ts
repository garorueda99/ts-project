import faker from "faker"
import {Mappable} from "./Map"

export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    }
    constructor(){
        this.name = faker.name.firstName() + " " + faker.name.lastName();
        this.location={
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
        // this.location.lat = parse faker.address.latitude(); 
        //initialization
    }
    markerContent(): string {
        return `User name: ${this.name}`
    }
}