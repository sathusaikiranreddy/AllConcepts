import { Component } from "@angular/core";
import { flatMap, Subscription } from "rxjs";
import { buffer, bufferCount, fromEvent, interval } from "rxjs";
import { RxjsService } from "../rxjs.service";

@Component({
    selector: "app-buffer",
    templateUrl: "./buffer.html"
})

export class BufferComponent {

    subscription$ : Subscription = new Subscription();
    bufferData: number[] = [];
    constructor(private _service: RxjsService) { }

    ngOnInit() {
        this.bufferOperator();
        this.bufferCountOperator();
    }

    //Collects values from the past as an array, and emits that array only when its size reaches bufferSize
    //this operator send the data in array once the inner observable emits data
    //outer observale has 1->2->3->4->5->6
    //inner observable emits data at 3 so first array result is [1,2,3] and emits data at 6 second array is [456]
    // this buffer stores data in memory when ever it is needed it emits values
    bufferOperator() {
        const newObservable$ = interval(1000);
        const event = fromEvent(document.getElementById("btn")!, 'click')
        this.subscription$ = newObservable$.pipe(
                buffer(event)
                )
        .subscribe({
            next: (data) => this.bufferData.push(...data)
        })
    }

    bufferCountOperator(){
        const newObservable$ = interval(1000);
        const event = fromEvent(document.getElementById("btn")!, 'click')
        this.subscription$ = newObservable$.pipe(
                buffer(event),
                bufferCount(2, 1)
                )
        .subscribe({
            next: (data) => console.log(data)
        })
    }

    cancel(){
        this.subscription$.unsubscribe();
    }

    back() {
        this._service.back();
    }
}