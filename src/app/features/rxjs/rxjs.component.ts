import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { RxjsService } from "./rxjs.service";

@Component({
    selector : "app-rxjs",
    templateUrl : "./rxjs.html"
})

export class RxjsComponent {
    $subscription : Subscription = new Subscription();
    image : string = "";
    constructor(private _service : RxjsService){}

    ngOnInit(){
        this.$subscription = this._service.$rxjsSubject.subscribe(resp =>{
            console.log(resp);
            if(resp.purpose == "getDetails"){
                this.image = resp.result.images[0];
            }
        })

        this._service.getDetailsOld();
    }


    ngOnDestroy(){
        this.$subscription.unsubscribe();
    }
}