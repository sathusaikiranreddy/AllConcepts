import { Component } from "@angular/core";
import { CustomeDecorator, CustomeDecorator2 } from "./decorator"

@Component({
    selector : "app-deco",
    templateUrl : "./deco.html",
})

export class CustomeDecoratorComponent{
    constructor(){
        console.log("this is decorator");
    }

    @CustomeDecorator()// this is our custome decorator can give any name
    deco() {
        console.log(this);
    }

    @CustomeDecorator2()// this is our custome decorator can give any name
    deco2() {

    }
}