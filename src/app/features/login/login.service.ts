import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn:"root"})

export class LoginService{

    $loginSubject : Subject<any> = new Subject();
    url : string = "https://dummyjson.com/auth/login";

    constructor(private _http  : HttpClient){}

    login(obj: any){
     this._http.post(this.url, obj).subscribe(resp =>{
         this.$loginSubject.next({result : resp, purpose :"loginSuccess"})
        //  this.$loginSubject.error({result : resp, purpose :"loginError"})
     })   
    }
}