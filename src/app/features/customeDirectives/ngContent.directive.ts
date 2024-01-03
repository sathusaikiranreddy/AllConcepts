import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: "[forContent]"
})

export class NgContentDirective {

    constructor(private _renderer: Renderer2, private _el?: ElementRef) { }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.


        // const div = this.renderer.createElement('div');
        // const text = this.renderer.createText('Hello world!');
        // this.renderer.appendChild(div, text);
        // this.renderer.appendChild(this.el.nativeElement, div);

        //this is same as above 4 lines
     
        const element = this._renderer.createElement("div");
        element.textContent = "This is from parent content without any if conditon from parent."+ 
            "this get loaded first without any event";
        this._renderer.appendChild(this._el?.nativeElement, element);
        
    }
    
    @Input() set showNgContent(value: boolean){
        if(value){
            //this removees all childrens present on element
            const childElements = this._el?.nativeElement.children;
            for (let child of childElements) 
                this._renderer.removeChild(this._el?.nativeElement, child);

            //appending a new child
            const element = this._renderer.createElement("div");
            element.textContent = "This is from parent content with if conditon from parent."+ 
                "this get loaded when we click on button";
            this._renderer.appendChild(this._el?.nativeElement, element);
        }
    }
    
}