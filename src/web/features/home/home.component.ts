import {Component, OnInit, ViewChild} from "@angular/core";
import LatLng = google.maps.LatLng;
import {MTChapter} from "../../model/mt-chapter.model";
import {MTMapComponent} from "../../shared/mt-map/mt-map.component";

@Component({
    selector: 'mt-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class MTHomeComponent implements OnInit {

    /**
     * The chapters of the story.
     */
    chapters: MTChapter[] = [
        {
            label: "Mule-Drawn Trolleys",
            mapLocation: new LatLng(40.767177, -111.889713),
            mapZoom: 18,
            markers: [
                {
                    mapLocation: new google.maps.LatLng(40.767097, -111.891184),
                    infoWindowContents: require("!html-loader!./chapters/1-mules/1/marker.html")
                },
                {
                    mapLocation: new google.maps.LatLng(40.767195, -111.891133),
                    infoWindowContents: require("!html-loader!./chapters/1-mules/2/marker.html")
                },
                {
                    mapLocation: new google.maps.LatLng(40.767367, -111.888322),
                    infoWindowContents: require("!html-loader!./chapters/1-mules/3/marker.html")
                }
            ]
        },
        {
            label: "Electrified Streetcars",
            mapLocation: new LatLng(40.7608, -111.8910),
            mapZoom: 14,
            markers: []
        },
        {
            label: "The Rio Grande Railroad",
            mapLocation: new LatLng(40.6963205,-111.9128377),
            mapZoom: 12,
            markers: [
                {
                    mapLocation: new google.maps.LatLng(40.626846, -111.904294),
                    infoWindowContents: require("!html-loader!./chapters/3-rio-grande/1/marker.html")
                }
            ]
        },
        {
            label: "The Great Saltair",
            mapLocation: new LatLng(40.7472, -112.1882),
            mapZoom: 13,
            markers: []
        }
    ];

    @ViewChild(MTMapComponent)
    map: MTMapComponent;

    ngOnInit(): void {
    }

    /**
     * Called when the navigation carousel chapter index changes.
     * @param {number} index The new chapter index.
     */
    chapterIndexChange(index: number) {
        console.log("Chapter: " + this.chapters[index].label);
        this.map.panTo(this.chapters[index].mapLocation, this.chapters[index].mapZoom);
        this.map.setMarkers(this.chapters[index].markers);
    }

}