/**
 * Represents a "chapter" of the digital story.
 */
export interface MTChapter {

    /**
     * The label for the navigation carousel.
     */
    label: string;

    /**
     * The location to pan to on the map.
     */
    mapLocation: google.maps.LatLng;

    /**
     * The zoom level of the map.
     */
    mapZoom: number;

}