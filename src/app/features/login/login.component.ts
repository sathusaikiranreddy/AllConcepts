import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { LoginService } from "./login.service";

@Component({
    selector : "app-login",
    templateUrl : "./login.html",
    styleUrls : ["./login.scss"]
})

export class Login {

    $subsription : Subscription = new Subscription();
    loginForm : FormGroup = new FormGroup({});

    constructor(private _fb : FormBuilder, private _router : Router, private _loginServ : LoginService){
        this.createForm();
    }

    ngOnChanges(){
        console.log("onchanges");
    }

    ngDoCheck(){
        console.log("do check");
    }

    ngOnInit(){
        this.$subsription = this._loginServ.$loginSubject.subscribe(resp =>{
            if(resp.purpose == "loginSuccess"){
                this._router.navigateByUrl("/allConcepts");
            }
        })

        var a = {test:"123", p:123, k:'qwqw'}
        var b =  {...a, p:345345}
        console.log(b)
    }

    createForm(){
        this.loginForm =  this._fb.group({
            username  : new FormControl("kminchelle",[Validators.required]),
            password :  new FormControl("0lelplR",[Validators.required])
        })
    }

    login(){
        this._router.navigateByUrl("/allConcepts");
        this._loginServ.login(this.loginForm.value);
    }

    // The local store has pros and cons to using local storage based on our use case.

    // Pros
    // The data stored in it has no expiration date
    // The storage limit is about 10 MB
    // Its data is never transferred to the server
    // Cons
    // Its data is plain text; hence it is not secure by design
    // The data type is limited to string; hence it needs to be serialized
    // Data can only be read on the client-side, not on the server-side
}