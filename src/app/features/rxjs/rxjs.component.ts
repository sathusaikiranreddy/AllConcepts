import { Component } from "@angular/core";
import { from, fromEvent, interval, Subscription } from "rxjs";
import { RxjsService } from "./rxjs.service";

@Component({
    selector : "app-rxjs",
    templateUrl : "./rxjs.html"
})
// RxJS is a library for composing asynchronous and event-based programs by using observable sequences. 
export class RxjsComponent {

    // when ever we are creating an observable we need to return from it. so that we can unsubscribe all
    // subscribed things with one subscription.
    subscription$ : Subscription = new Subscription();
    image : string = "";
    constructor(private _service : RxjsService){}

    ngOnInit(){
        this.subscription$ = this._service.$rxjsSubject.subscribe(resp =>{
            console.log(resp);
            if(resp.purpose == "getDetails"){
                this.image = resp.result.images[0];
            }
        })

        this._service.getDetailsOld();
        this.getPostData();
        this.interval();
    }

    // convert normal data to observable data using "from"
    //start
    postData = [
        {id:1, title:"123123"},
        {id:2, title:"123456"},
        {id:3, title:"123457"},
    ]
    postObservable$ = from(this.postData);
    
    getPostData(){
        this.postObservable$.subscribe({
            next:(data)=> console.log(data),
            error:(err)=>console.log(err),
            complete:()=>console.log("completed")
        })   
    }

    //end

    // convert event handlers into observables "fromEvent"
    //start
    ngAfterViewInit(){
        fromEvent(document.getElementById("button")!,"click").subscribe({
            next:(data)=> console.log(data),
            error:(err)=>console.log(err),
            complete:()=>console.log("completed")
        })
    }
    //end

    // rxjs operators
    //operators are just functions which takes some data and returns a function.
    // pipeable operators : is a function which takes an observable and return observable
    // creation operators : standalone functions used to create a new functions.
    

    interval(){
        // const newObservable$ = interval(1000);
        // this.subscription$ = newObservable$.subscribe({
        //     next :(data)=> console.log(data)
        // })
    }

    cancel(){
        this.subscription$.unsubscribe();
    }

    ngOnDestroy(){
        this.subscription$.unsubscribe();
    }
}