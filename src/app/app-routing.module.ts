import { CreateProjectComponent } from './components/create-project/create-project.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:'', redirectTo:'dashboard', pathMatch:'full'},
{path:'dashboard', component:DashboardComponent},
{path:'create-project', component:CreateProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
