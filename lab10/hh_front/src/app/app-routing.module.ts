import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {VacancyComponent} from "./vacancy/vacancy.component";
import {CompanyComponent} from "./company/company.component";

const routes: Routes = [

  {path: "companies", component: CompanyComponent},
  {path: "companies/:id", component: VacancyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }