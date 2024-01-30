import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

@Injectable({providedIn:"root"})

export class RxjsService{

    $rxjsSubject : Subject<any> = new Subject();
    url : string = "https://dummyjson.com/products/1";
    urlCategories : string = "https://dummyjson.com/products/categories/smartphones"
    constructor(private _http : HttpClient, private _router :Router){}

    // getDetails(){
    //     return this._http.get(this.url).subscribe({
            
    //     })
    // }
    getDetailsOld(){
        return this._http.get(this.url).subscribe(resp => {
           this.$rxjsSubject.next({result : resp, purpose : "getDetails"}) 
        })
    }

    getCategories(){
        return this._http.get(this.urlCategories).subscribe(resp => {
            this.$rxjsSubject.next({result : resp, purpose : "getCategories"}) 
         })
    }

    back(){
        this._router.navigateByUrl("/allConcepts/rxjs/operators");
    }
}