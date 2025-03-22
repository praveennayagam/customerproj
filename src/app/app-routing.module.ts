import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreatecustomerComponent } from './createcustomer/createcustomer.component';
import { CustlistComponent } from './custlist/custlist.component';
import { CusteditComponent } from './custedit/custedit.component';

const routes: Routes = [
  {path :'home' , component: HomeComponent},
  {path :'createcustomer',component: CreatecustomerComponent},
  {path:'custlist' ,component: CustlistComponent},
  {path:'updatecust/:id', component:CusteditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
