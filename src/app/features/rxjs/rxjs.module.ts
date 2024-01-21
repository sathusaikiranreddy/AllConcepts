import { NgModule } from "@angular/core";
import { RxjsComponent } from "./rxjs.component";
import { RxjsService } from "./rxjs.service";

@NgModule({
    declarations : [RxjsComponent],
    imports : [],
    exports :[],
    providers:[RxjsService]
})

export class RxjsModule{

}