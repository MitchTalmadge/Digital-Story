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
            label: "Trolley Square",
            mapLocation: new LatLng(40.7608, -111.8910),
            mapZoom: 14
        },
        {
            label: "The Great Saltair",
            mapLocation: new LatLng(40.7472, -112.1882),
            mapZoom: 13
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
    }

}