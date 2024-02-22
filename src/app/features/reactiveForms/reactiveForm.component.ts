import { Component } from "@angular/core";
import { FormArray, FormArrayName, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector:"app-reactive",
    templateUrl:"./reactiveForm.html"
})

export class ReactiveFormComponent{ 

    userDetails! : FormGroup;

    constructor(private _fb :FormBuilder){
        this.createForm();
    }

    createForm(){
        this.userDetails = this._fb.group({
            firstName : ["", [Validators.required]],
            lastName : ["", [Validators.required]],
            email : ["", [Validators.required, Validators.email]],
            address :this._fb.array([])
        })
    }

    addAddress(){
        const addressForm = this._fb.group({
            plotNo : ["", [Validators.required]],
            street : ["", [Validators.required]],
            city : ["", [Validators.required]],
            state :["", [Validators.required]]
        })

        this.addressArray.push(addressForm);
    }

    get addressArray(){
        return this.userDetails.get("address") as FormArray;
    }

    deleteFormRow(i:number){
        this.addressArray.removeAt(i);
    }

    save(){
        console.log(this.userDetails.value);
    }

}