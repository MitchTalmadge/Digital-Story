import {Component, OnInit} from "@angular/core";
import LatLng = google.maps.LatLng;

@Component({
    selector: 'mt-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class MTHomeComponent implements OnInit {

    /**
     * The latitude and longitude of Salt Lake City.
     */
    slcLatLng: LatLng = new LatLng(40.7608, -111.8910);

    ngOnInit(): void {
    }

}