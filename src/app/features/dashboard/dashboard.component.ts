import { Component, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { decrement, increment, reset } from "../counterNgrx/counterActions";
import { CounterState } from "../counterNgrx/counterState";
import { getPostsSelector } from "../ngrx/ngrxSelector";
import { AppReducer, AppState, Post, PostState } from "../ngrx/ngrxState";

@Component({
    selector : "app-dashboard",
    templateUrl:"./dashboard.html",
    styleUrls:["./dashboard.css"]
})


export class DashboardComponent{
      counter :  number = 0;
      posts! : Observable<Post[]>;

    //  @ViewChild('sidenav') sidenav !: MatSidenav;
  // here  Store<{counter:{counter : number}}>  counter means the word give in appmodule and obj is initial state
    constructor(private _router : Router, private _store : Store<AppState>){}

    ngOnInit(){
      this.posts =  this._store.select(getPostsSelector);
      this.posts.subscribe(resp =>{
        console.log(resp);
      })
      this.getCounter();
    }

    home(){
      this._router.navigateByUrl("/allConcepts/home");
    }

    ngContent(){
    this._router.navigateByUrl("/allConcepts/ngContent");
  }

    login(){
        this._router.navigateByUrl("/login");
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
          this.counter = resp.counter;
        })
      }

      rxjs(){
        this._router.navigateByUrl("/allConcepts/rxjs");
      }

      // toggle(){
      //   this.sidenav.toggle();
      // }
}