import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AllConcepts';
  showDeco : boolean = true;

  constructor(private _router : Router){}

  deco(){
    this.showDeco = false;
    this._router.navigateByUrl("/customDeco");
  }

  ngContent(){
    this._router.navigateByUrl("/ngContent");
  }

  viewChild(){
    this._router.navigateByUrl("/viewChild");
  }


}
