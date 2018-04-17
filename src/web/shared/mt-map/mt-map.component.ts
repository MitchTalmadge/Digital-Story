import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {MTMarker} from "../../model/mt-marker.model";
import LatLngBounds = google.maps.LatLngBounds;
import LatLng = google.maps.LatLng;

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
     * The last-panned-to map zoom level, in case the map is shifted by an info window.
     */
    private originalMapZoom: number;

    /**
     * All markers currently displayed on the map.
     */
    private markers: google.maps.Marker[] = [];

    /**
     * The currently open info-window, if any.
     */
    private openInfoWindow: google.maps.InfoWindow;

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
            clickableIcons: false,
            draggable: false,
            draggableCursor: 'default',
            fullscreenControl: false,
            mapTypeControl: false,
            scrollwheel: false,
            streetViewControl: false,
            zoomControl: false,
            zoom: 1
        });

        this.map.addListener("click", args => {
            if (this.openInfoWindow != null) {
                this.openInfoWindow.close();
                this.openInfoWindow = null;
                this.panTo(this.originalMapLocation, this.originalMapZoom);
            }
        });
    }

    /**
     * Pans the map to the given location and zoom level.
     * @param {google.maps.LatLng} location The coordinates to pan to.
     * @param {number} zoom The zoom level to pan to.
     */
    panTo(location: LatLng, zoom: number) {
        this.map.panTo(location);
        this.originalMapLocation = location;

        this.map.setZoom(zoom);
        this.originalMapZoom = zoom;

        this.openInfoWindow = null;
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
                if (this.openInfoWindow != null) {

                    if (this.openInfoWindow == infoWindow) {
                        this.openInfoWindow.close();
                        this.panTo(this.originalMapLocation, this.originalMapZoom);
                        return;
                    }

                    this.openInfoWindow.close();
                }
                infoWindow.open(this.map, mapMarker);
                this.openInfoWindow = infoWindow;
            });

            // Add close listener to pan map back to original location when info window is closed.
            infoWindow.addListener("closeclick", args => {
                this.panTo(this.originalMapLocation, this.originalMapZoom);
            });

            // Add map marker into array so it can be removed later.
            this.markers.push(mapMarker);
        })
    }
}