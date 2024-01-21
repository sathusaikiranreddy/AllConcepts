import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomeDecoratorComponent } from '../customeDecorators/deco.component';
import { ParentComponent } from '../ngContent/parentComponent/parent.component';
import { ViewParentComponent } from '../viewchild/parentComponent/parent.component';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
    {path:"", redirectTo:"/allConcepts", pathMatch:"full"},
    {path : "allConcepts", component: DashboardComponent,
        children:[
            {path:"decorator", component:CustomeDecoratorComponent},
            {path:"ngContent", component:ParentComponent},
            {path:"viewChild", component:ViewParentComponent},
            {path:"rxjs", loadChildren:()=> import("../rxjs/rxjs.module").then(m => m.RxjsModule)},
            // {path: "ngContent", loadChildren:()=> import("../ngContent").then(m => m.RxjsModule)}
        ]
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbardRoutingModule { }