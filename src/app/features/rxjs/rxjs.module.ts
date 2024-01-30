import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppMaterialModule } from "app/app.material.module";
import { BufferComponent } from "./buffer/buffer.component";
import { DistinctComponent } from "./distinct/distinct.component";
import { HigherOrderComponent } from "./higherorderObservables/higherOrder.component";
import { RxjsComponent } from "./rxjs.component";
import { RxjsService } from "./rxjs.service";
import { RxjsRoutingModule } from "./rxjsRouting.module";


@NgModule({
    declarations : [RxjsComponent, BufferComponent, DistinctComponent, HigherOrderComponent],
    imports : [
         RxjsRoutingModule,
         AppMaterialModule,
         CommonModule,
         FormsModule
    ],
    exports :[],
    providers:[RxjsService]
})

export class RxjsModule{

}