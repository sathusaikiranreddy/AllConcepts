import { Component } from "@angular/core";
import { debounceTime, Subject } from "rxjs";
import {  distinct, distinctUntilChanged, from, fromEvent, map, Observable, of, Subscription } from "rxjs";
import { RxjsService } from "../rxjs.service";

@Component({
    selector:"app-distinct",
    templateUrl:"./distinct.html"
})

export class DistinctComponent{

    subject : Subject<any> = new Subject();
    subscription$ : Subscription = new Subscription();
    distinctData: any[] = [];
    searchValue : string = "";
    changedValue : string = "";
    constructor(private _service: RxjsService) { }

    ngOnInit() {
        this.distinctOperator();
       this.changed();
    }
    
    distinctOperator(){
        var employee = [
            {id:1, name:"emp1"},
            {id:2, name:"emp1"},
            {id:1, name:"emp3"}
        ]

        from(employee)
            .pipe(distinct(data => data.id))
            .subscribe({
                next:(data)=> this.distinctData.push(data)
            })
    }

    distinctUnitilChanged(event : any){
        this.subject.next(event);
    }

    changed(){
       
    this.subject
            .pipe(
                debounceTime(1000),
                distinctUntilChanged())
            .subscribe(resp =>{
               console.log(resp);
            })
    }
    
    
    cancel(){
        this.subscription$.unsubscribe();
    }

    back() {
        this._service.back();
    }

}