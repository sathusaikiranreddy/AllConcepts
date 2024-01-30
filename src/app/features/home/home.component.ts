import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { decrement, increment, reset } from "../counterNgrx/counterActions";
import { CounterState } from "../counterNgrx/counterState";

@Component({
    selector : "app-home",
    templateUrl:"./home.html"
})


export class HomeComponent{
      counter :  number = 0;
  // here  Store<{counter:{counter : number}}>  counter means the word give in appmodule and obj is initial state
    constructor(private _router : Router, private _store : Store<{counter: CounterState}>){}

    ngOnInit(){
      this.getCounter();
    }

  
      increment(){
        this._store.dispatch(increment());
      }

      decrement(){   
        this._store.dispatch(decrement());
      }

      reset(){
        this._store.dispatch(reset());
      }

      getCounter(){
         this._store.select('counter').subscribe(resp =>{
            // console.log("this is from home")
          this.counter = resp.counter;
        })
      }
}