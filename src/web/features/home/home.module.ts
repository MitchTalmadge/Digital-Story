import {NgModule} from "@angular/core";

import {MTHomeComponent} from "./home.component";
import {SharedModule} from "../../shared/shared.module";
import {MTHomeRoutesModule} from "./home.routes";
import {MTNavigationComponent} from "./mt-navigation/mt-navigation.component";

@NgModule({
    imports: [
        SharedModule,
        MTHomeRoutesModule,
    ],
    declarations: [
        MTHomeComponent,
        MTNavigationComponent
    ],
    exports: [],
    providers: [],
})
export class MTHomeModule {
}
