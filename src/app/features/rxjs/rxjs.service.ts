import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn:"root"})

export class RxjsService{

    $rxjsSubject : Subject<any> = new Subject();
    url : string = "https://dummyjson.com/products/1";
    constructor(private _http : HttpClient){}

    // getDetails(){
    //     return this._http.get(this.url).subscribe({
            
    //     })
    // }
    getDetailsOld(){
        return this._http.get(this.url).subscribe(resp => {
           this.$rxjsSubject.next({result : resp, purpose : "getDetails"}) 
        })
    }
}