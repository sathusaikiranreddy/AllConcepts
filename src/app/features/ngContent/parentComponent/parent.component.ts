import { Component } from "@angular/core";

@Component({
    selector :"app-parent",
    templateUrl:"./parent.html"
})

export class ParentComponent{

    showNgContent : boolean = false;

    parent(){
        this.showNgContent = true;
    }
}