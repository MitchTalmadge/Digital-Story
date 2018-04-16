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
                    infoWindowContents: require("!html-loader!./chapters/mules/1/marker.html")
                },
                {
                    mapLocation: new google.maps.LatLng(40.767195, -111.891133),
                    infoWindowContents: require("!html-loader!./chapters/mules/2/marker.html")
                },
                {
                    mapLocation: new google.maps.LatLng(40.767367, -111.888322),
                    infoWindowContents: require("!html-loader!./chapters/mules/3/marker.html")
                }
            ]
        },
        {
            label: "Electrified Streetcars",
            mapLocation: new LatLng(40.7608, -111.8910),
            mapZoom: 15,
            markers: [
                {
                    mapLocation: new google.maps.LatLng(40.761837, -111.891105),
                    infoWindowContents: require("!html-loader!./chapters/electric/1/marker.html")
                }
            ]
        },
        {
            label: "The Rio Grande Railroad",
            mapLocation: new LatLng(40.6963205,-111.9128377),
            mapZoom: 12,
            markers: [
                {
                    mapLocation: new google.maps.LatLng(40.626846, -111.904294),
                    infoWindowContents: require("!html-loader!./chapters/rio-grande/1/marker.html")
                }
            ]
        },
        {
            label: "The Great Saltair",
            mapLocation: new LatLng(40.7472, -112.1882),
            mapZoom: 13,
            markers: [
                {
                    mapLocation: new google.maps.LatLng(40.771676, -112.052835),
                    infoWindowContents: require("!html-loader!./chapters/saltair/1/marker.html")
                },
                {
                    mapLocation: new google.maps.LatLng(40.773200, -112.170894),
                    infoWindowContents: require("!html-loader!./chapters/saltair/2/marker.html")
                },
                {
                    mapLocation: new google.maps.LatLng(40.783381, -112.185353),
                    infoWindowContents: require("!html-loader!./chapters/saltair/3/marker.html")
                },
                {
                    mapLocation: new google.maps.LatLng(40.780421, -112.178870),
                    infoWindowContents: require("!html-loader!./chapters/saltair/4/marker.html")
                },
                {
                    mapLocation: new google.maps.LatLng(40.767422, -112.157809),
                    infoWindowContents: require("!html-loader!./chapters/saltair/5/marker.html")
                }
            ]
        },
        {
            label: "TRAX",
            mapLocation: new LatLng(40.6615365,-111.9622589),
            mapZoom: 11.75,
            markers: [
                {
                    mapLocation: new google.maps.LatLng(40.544125, -112.014149),
                    infoWindowContents: require("!html-loader!./chapters/trax/1/marker.html")
                },
                {
                    mapLocation: new google.maps.LatLng(40.558707, -112.024697),
                    infoWindowContents: require("!html-loader!./chapters/trax/2/marker.html")
                },
                {
                    mapLocation: new google.maps.LatLng(40.569112, -112.024826),
                    infoWindowContents: require("!html-loader!./chapters/trax/3/marker.html")
                },
                {
                    mapLocation: new google.maps.LatLng(40.581523, -112.004029),
                    infoWindowContents: require("!html-loader!./chapters/trax/4/marker.html")
                },
                {
                    mapLocation: new google.maps.LatLng(40.594754, -111.971800),
                    infoWindowContents: require("!html-loader!./chapters/trax/5/marker.html")
                },
                {
                    mapLocation: new google.maps.LatLng(40.599022, -111.956930),
                    infoWindowContents: require("!html-loader!./chapters/trax/6/marker.html")
                },
                {
                    mapLocation: new google.maps.LatLng(40.604928, -111.936496),
                    infoWindowContents: require("!html-loader!./chapters/trax/7/marker.html")
                },
                {
                    mapLocation: new google.maps.LatLng(40.608041, -111.924272),
                    infoWindowContents: require("!html-loader!./chapters/trax/8/marker.html")
                },
                {
                    mapLocation: new google.maps.LatLng(40.617066, -111.915259),
                    infoWindowContents: require("!html-loader!./chapters/trax/9/marker.html")
                },
                {
                    mapLocation: new google.maps.LatLng(40.633612, -111.898355),
                    infoWindowContents: require("!html-loader!./chapters/trax/10/marker.html")
                },
                {
                    mapLocation: new google.maps.LatLng(40.659921, -111.895501),
                    infoWindowContents: require("!html-loader!./chapters/trax/11/marker.html")
                },
                {
                    mapLocation: new google.maps.LatLng(40.676710, -111.894030),
                    infoWindowContents: require("!html-loader!./chapters/trax/12/marker.html")
                },
                {
                    mapLocation: new google.maps.LatLng(40.687610, -111.896616),
                    infoWindowContents: require("!html-loader!./chapters/trax/13/marker.html")
                },
                {
                    mapLocation: new google.maps.LatLng(40.700531, -111.896907),
                    infoWindowContents: require("!html-loader!./chapters/trax/14/marker.html")
                },
                {
                    mapLocation: new google.maps.LatLng(40.724443, -111.896877),
                    infoWindowContents: require("!html-loader!./chapters/trax/15/marker.html")
                },
                {
                    mapLocation: new google.maps.LatLng(40.742180, -111.896806),
                    infoWindowContents: require("!html-loader!./chapters/trax/16/marker.html")
                },
                {
                    mapLocation: new google.maps.LatLng(40.750459, -111.896843),
                    infoWindowContents: require("!html-loader!./chapters/trax/17/marker.html")
                },
                {
                    mapLocation: new google.maps.LatLng(40.759178, -111.891037),
                    infoWindowContents: require("!html-loader!./chapters/trax/18/marker.html")
                },
                {
                    mapLocation: new google.maps.LatLng(40.763450, -111.891089),
                    infoWindowContents: require("!html-loader!./chapters/trax/19/marker.html")
                },
                {
                    mapLocation: new google.maps.LatLng(40.767841, -111.891035),
                    infoWindowContents: require("!html-loader!./chapters/trax/20/marker.html")
                }
            ]
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