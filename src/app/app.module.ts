import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomeDecoratorComponent } from './features/customeDecorators/deco.component';
import { AppMaterialModule } from './app.material.module';
import { CommonModule } from '@angular/common';
import { DirectiveComponent } from './features/customeDirectives/directive.component';
import { StandAloneComponent } from './features/standalone/standalone.component';
import { ChildComponent } from './features/ngContent/childComponent/child.component';
import { ParentComponent } from './features/ngContent/parentComponent/parent.component';
import { ViewChildComponent } from './features/viewchild/childComponent/child.component';
import { ViewParentComponent } from './features/viewchild/parentComponent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomeDecoratorComponent,
    DirectiveComponent,
    ChildComponent,
    ParentComponent,
    ViewChildComponent,
    ViewParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    AppMaterialModule,
    StandAloneComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
