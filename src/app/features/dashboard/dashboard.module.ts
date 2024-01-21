import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "app/app.component";
import { AppMaterialModule } from "app/app.material.module";
import { CustomeDecoratorComponent } from "../customeDecorators/deco.component";
import { DirectiveComponent } from "../customeDirectives/directive.component";
import { NgContentDirective } from "../customeDirectives/ngContent.directive";
import { ChildComponent } from "../ngContent/childComponent/child.component";
import { ParentComponent } from "../ngContent/parentComponent/parent.component";
import { StandAloneComponent } from "../standalone/standalone.component";
import { ViewChildComponent } from "../viewchild/childComponent/child.component";
import { ViewParentComponent } from "../viewchild/parentComponent/parent.component";
import { DashboardComponent } from "./dashboard.component";
import { DashbardRoutingModule } from "./dashboardRouting.module";

@NgModule({
    declarations:[
        CustomeDecoratorComponent,
        DirectiveComponent,
        ChildComponent,
        ParentComponent,
        ViewChildComponent,
        ViewParentComponent,
        NgContentDirective,
        DashboardComponent
    ],
    imports:[
        DashbardRoutingModule,
        AppMaterialModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        StandAloneComponent
    ],
    exports:[],
    
})

export class DashboardModule{
    
}