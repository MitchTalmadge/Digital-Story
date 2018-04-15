import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {MTMarker} from "../../model/mt-marker.model";

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
     * The map div element
     */
    @ViewChild("map")
    private mapDiv: ElementRef;

    /**
     * The Google Maps map instance.
     */
    private map: google.maps.Map;

    /**
     * The last-panned-to map location, in case the map is shifted by an info window.
     */
    private originalMapLocation: google.maps.LatLng;

    /**
     * All markers currently displayed on the map.
     */
    private markers: google.maps.Marker[] = [];

    /**
     * A set of currently-open info windows.
     */
    private openInfoWindows: Set<google.maps.InfoWindow> = new Set<google.maps.InfoWindow>();

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
            center: new google.maps.LatLng(0, 0),
            draggable: false,
            draggableCursor: 'default',
            fullscreenControl: false,
            mapTypeControl: false,
            scrollwheel: false,
            streetViewControl: false,
            zoomControl: false,
            zoom: 1
        });
    }

    /**
     * Pans the map to the given location and zoom level.
     * @param {google.maps.LatLng} location The coordinates to pan to.
     * @param {number} zoom The zoom level to pan to.
     */
    panTo(location: google.maps.LatLng, zoom: number) {
        this.map.panTo(location);
        this.originalMapLocation = location;
        this.map.setZoom(zoom);

        this.openInfoWindows.clear();
    }

    /**
     * Sets the markers that will be displayed on the map.
     * @param {MTMarker[]} markers The markers to display.
     */
    setMarkers(markers: MTMarker[]) {
        // Clear existing markers.
        this.markers.forEach(marker => marker.setMap(null));
        this.markers = [];

        // Add new markers
        let markerLabel: number = 1;
        markers.forEach(marker => {
            // Create info window
            let infoWindow = new google.maps.InfoWindow({
                content: marker.infoWindowContents
            });

            // Create map marker
            let mapMarker = new google.maps.Marker({
                position: marker.mapLocation,
                map: this.map,
                label: {
                    text: (markerLabel++).toString(),
                    color: "white",
                    fontWeight: "bold"
                }
            });

            // Add click listener to open info window.
            mapMarker.addListener("click", args => {
                infoWindow.open(this.map, mapMarker);
                this.openInfoWindows.add(infoWindow);
            });

            // Add close listener to pan map back to original location when info window is closed.
            infoWindow.addListener("closeclick", args => {
                this.openInfoWindows.delete(infoWindow);
                if (this.openInfoWindows.size == 0)
                    this.panTo(this.originalMapLocation, this.map.getZoom());
            });

            // Add map marker into array so it can be removed later.
            this.markers.push(mapMarker);
        })
    }
}