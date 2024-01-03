import { NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector :"app-stand",
    templateUrl:"./standalone.html",
    standalone: true,
    imports:[ NgIf, NgFor]
})

/**  we can write our whole application components, pipes and directive
    without any module using standalone to true.
*/
//ng g @angular/core:standalone to migrate to standalone app.

// why we need to add CUSTOME_ELEMENTS_SCHEMA

export class StandAloneComponent{

    title : string ="StandAlone Components";
    showTitle : boolean = true;
    showDup : number = 0;
    pageTitle(){
        this.showTitle = !this.showTitle;

       
    }

    numSequence(n: number): Array<number> { 
        setTimeout(() => {
            //    while (this.showDup < 5) {
            //     this.showDup++;
            //    }
            }, 1000);
        return Array(n); 
      } 

  
}