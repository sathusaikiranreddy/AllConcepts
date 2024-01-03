import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomeDecoratorComponent } from './features/customeDecorators/deco.component';
import { ViewParentComponent } from './features/viewchild/parentComponent/parent.component';
import { ParentComponent } from './features/ngContent/parentComponent/parent.component';

const routes: Routes = [
  {path:"customDeco", component:CustomeDecoratorComponent},
  {path:"viewChild", component: ViewParentComponent},
  {path:"ngContent", component: ParentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
