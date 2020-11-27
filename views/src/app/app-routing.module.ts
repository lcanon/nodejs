import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { InitScreenComponent } from './init-screen/init-screen.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {path: '', component: InitScreenComponent },
  {path: 'objetivos', component: MainPageComponent },
  {path: 'goals/:id', component: GoalDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
