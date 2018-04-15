/**
 * Represents a marker on the map.
 */
export interface MTMarker {

    /**
     * The location to place the marker on the map.
     */
    mapLocation: google.maps.LatLng;

    /**
     * The HTML contents of the info window when the marker is clicked.
     */
    infoWindowContents: string;

}