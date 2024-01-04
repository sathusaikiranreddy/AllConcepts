import { Component, Input, inject } from "@angular/core";
import { MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

export interface Country {
    name: string;
  }

@Component({
    selector :"app-viewchild",
    templateUrl:"./child.html"
})

export class ViewChildComponent{

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  canAdd : Boolean = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  @Input() countries : Country[] = [];

//   set addvalue(value: boolean){
//     this.canAdd = value;
//   }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || "").trim() && this.canAdd) {
      this.countries.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = "";
    }
  }

  remove(country: Country): void {
    const index = this.countries.indexOf(country);

    
    if (index >= 0) {
      this.countries.splice(index, 1);
    }
  }
    // addOnBlur = true;
    // readonly separatorKeysCodes = [ENTER, COMMA] as const;
    // fruits: Fruit[] = [{name: 'Lemon'}, {name: 'Lime'}, {name: 'Apple'}];
  
    // announcer = inject(LiveAnnouncer);
  
    // add(event: MatChipInputEvent): void {
    //   const value = (event.value || '').trim();
  
    //   // Add our fruit
    //   if (value) {
    //     this.fruits.push({name: value});
    //   }
  
    //   // Clear the input value
    //   event.chipInput!.clear();
    // }
  
    // remove(fruit: Fruit): void {
    //   const index = this.fruits.indexOf(fruit);
  
    //   if (index >= 0) {
    //     this.fruits.splice(index, 1);
  
    //     this.announcer.announce(`Removed ${fruit}`);
    //   }
    // }
  
    // edit(fruit: Fruit, event: any) {
    //   const value = event.value.trim();
  
    //   // Remove fruit if it no longer has a name
    //   if (!value) {
    //     this.remove(fruit);
    //     return;
    //   }
  
    //   // Edit existing fruit
    //   const index = this.fruits.indexOf(fruit);
    //   if (index >= 0) {
    //     this.fruits[index].name = value;
    //   }
    // }
    deco(){
        
    }
}