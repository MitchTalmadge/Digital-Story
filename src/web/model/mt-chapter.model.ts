/**
 * Represents a "chapter" of the digital story.
 */
import {MTMarker} from "./mt-marker.model";

export interface MTChapter {

    /**
     * The label for the navigation carousel.
     */
    label: string;

    /**
     * The location to pan to on the map.
     */
    mapLocation?: google.maps.LatLng;

    /**
     * The zoom level of the map.
     */
    mapZoom?: number;

    /**
     * The bounds to pan to.
     */
    mapLocationBounds?: google.maps.LatLngBounds;

    /**
     * The markers associated with the chapter.
     */
    markers: MTMarker[];

}