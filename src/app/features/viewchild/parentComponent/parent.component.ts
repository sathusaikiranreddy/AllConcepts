import { Component, ViewChild, ViewChildren } from "@angular/core";
import { ChildComponent } from "app/features/ngContent/childComponent/child.component";
import { ViewChildComponent } from "../childComponent/child.component";

export interface Country {
    name: string;
  }

@Component({
    selector :"app-viewparent",
    templateUrl:"./parent.html"
})

export class ViewParentComponent{

    newCountry : string = "";
    countries: Country[] = [
        { name: "India" },
        { name: "USA" },
        { name: "Apple" }
      ];

    // use ! optional operator not ? because it is giving an issue
    // static:true will resolves ViewChild before any change detection is run.
    // static:false will resolves it after every change detection run.
    @ViewChild("child",{static: true}) childComp! : ViewChildComponent;

    constructor(){}

    addToChild(){
        this.childComp.canAdd= false;
        if((this.newCountry || "").trim()){
            this.countries.push({name:this.newCountry.trim()});
            this.newCountry = "";
        }
       
    }
}