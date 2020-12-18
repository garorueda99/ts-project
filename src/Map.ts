import {User} from "./User"
import {Company} from "./Company"

export class Map {
    private googleMap: google.maps.Map;
    constructor (didID:string) {
        this.googleMap = new google.maps.Map(document.getElementById(didID),{zoom: 1, center: { lat:0, lng:0}})
    }
    addMarker(mappable: User|Company):void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })
    }
}