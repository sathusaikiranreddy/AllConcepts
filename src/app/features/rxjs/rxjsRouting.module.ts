import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BufferComponent } from './buffer/buffer.component';
import { DistinctComponent } from './distinct/distinct.component';
import { HigherOrderComponent } from './higherorderObservables/higherOrder.component';
import { RxjsComponent } from './rxjs.component';
import { SkipComponent } from './skip/skip.component';
import { TakeComponent } from './take/take.component';


const routes: Routes = [
    {path:"", redirectTo:"operators", pathMatch:"full"},
    {path : "operators", component: RxjsComponent},
    {path : "buffer", component: BufferComponent,},
    {path : "distinct", component: DistinctComponent,},
    {path : "skip", component: SkipComponent,},
    {path : "take", component: TakeComponent,},
    {path : "higherOrder", component: HigherOrderComponent,},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }