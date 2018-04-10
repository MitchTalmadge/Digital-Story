import {NgModule} from "@angular/core";

import {MTHomeComponent} from "./home.component";
import {SharedModule} from "../../shared/shared.module";
import {MTHomeRoutesModule} from "./home.routes";

@NgModule({
    imports: [
        SharedModule,
        MTHomeRoutesModule,
    ],
    declarations: [
        MTHomeComponent,
    ],
    exports: [],
    providers: [],
})
export class MTHomeModule {
}
