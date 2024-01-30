import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { concatMap, identity, mergeMap, of } from "rxjs";
import { exhaustMap, switchMap } from "rxjs/operators";
import { RxjsService } from "../rxjs.service";

@Component({
    selector: "app-higherOrder",
    templateUrl: "./higherOrder.html"
})

export class HigherOrderComponent {

    url: string = "https://dummyjson.com/products/";
    urlCategories: string = "https://dummyjson.com/products/categories/smartphones";

    constructor(private _http: HttpClient, private _service: RxjsService) { }

    getDetailsOld(id: number) {
        return this._http.get(this.url + id);
    }

    getCategories() {
        return this._http.get(this.urlCategories);
    }

    ngOnInit() {

        //    const getDetails = this.getDetailsOld();
        //    const getCategoreis =  this.getCategories();
    }

    // cannot predict ths order of inner observable
    mergeMap() {
        of(1, 2, 3)
            .pipe(
                mergeMap(id => {
                    return this.getDetailsOld(id)
                })
            ).subscribe(resp => {
                console.log(resp)
            })
    }

    // this is serialized version will have order
    concatMap(){
        of(1, 2, 3)
        .pipe(
            concatMap(id => {
                return this.getDetailsOld(id)
            })
        ).subscribe(resp => {
            console.log(resp)
        })
    }

    // the innner observable gets canncelled. this is used for button clicks or rapid data change
    switchMap(){
        of(1, 2, 3)
        .pipe(
            switchMap(id => {
                console.log(id)
                return this.getDetailsOld(id)
            })
        ).subscribe(resp => {
            console.log(resp)
        })
    }

    exaustMap(){
        of(1, 2, 3)
        .pipe(
            exhaustMap(id => {
                console.log(id)
                return this.getDetailsOld(id)
            })
        ).subscribe(resp => {
            console.log(resp)
        })
    }

    back() {
        this._service.back();
    }
}