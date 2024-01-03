import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector:"[sample]"
})

export class DirectiveComponent{
    constructor(private _el : ElementRef, private _renderer : Renderer2){}

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        
        console.log(this._el);
// DOM Manipulations via directly changing properties on the nativeElement is not considered as a good practice.
// It's also not going to work in some cases like Web Workers and Server Side Rendering using Angular Universal.
        //changes width
        this._el.nativeElement.style.width = "50%";
        //add new class styles
        this._el.nativeElement.className = "change-font-color"
        //changes inner html value
        this._el.nativeElement.innerHTML ="This heading is changed"
        //changes background color
        this._el.nativeElement.style.background  = "blue"
// directly using elementref is not safe so we use renderer2
        // changes background color
        this._renderer.setStyle(this._el.nativeElement, "background", "yellow"); 
        // changes inner html value
        this._renderer.setProperty(this._el.nativeElement, "innerHTML","This value is from renderer2");

        setInterval(()=>{
            this._renderer.setStyle(this._el.nativeElement, "background", "orange"); 
        },4000)

        const el = this.createAndAppendElement();
        this._renderer.setStyle(el,"background","red");
        this._renderer.appendChild(this._el.nativeElement,el);
    }
// this is for creating a new element
    public createAndAppendElement() {
        const el = this._renderer.createElement('span');
        console.log(" =---------",el)
        el.textContent = ' hello world';
        return el;
      }
}