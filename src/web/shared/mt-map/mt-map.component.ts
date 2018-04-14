import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'mt-map',
    templateUrl: 'mt-map.component.html',
    styleUrls: ['mt-map.component.css']
})

/**
 * Creates a Google Map
 */
export class MTMapComponent implements OnInit, AfterViewInit {

    /**
     * The starting center coordinates for this map.
     */
    @Input("startCoordinates")
    startCoordinates: google.maps.LatLng = new google.maps.LatLng(-25.363, 131.044);

    /**
     * The starting zoom level for this map.
     */
    @Input("startZoom")
    startZoom: number = 4;

    /**
     * The map div element
     */
    @ViewChild("map")
    mapDiv: ElementRef;

    /**
     * The Google Maps map instance.
     */
    map: google.maps.Map;

    constructor() {
    }

    ngOnInit() {

    }

    ngAfterViewInit(): void {
        this.initGoogleMaps();
    }

    /**
     * Initializes the map.
     */
    private initGoogleMaps(): void {
        this.map = new google.maps.Map(this.mapDiv.nativeElement, {
            center: this.startCoordinates,
            zoom: this.startZoom
        });
    }
}