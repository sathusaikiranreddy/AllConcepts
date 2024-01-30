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

    ngOnInit(){
        this.$subsription = this._loginServ.$loginSubject.subscribe(resp =>{
            if(resp.purpose == "loginSuccess"){
                this._router.navigateByUrl("/allConcepts");
            }
        })
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
}