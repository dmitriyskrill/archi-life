import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoriesListPageComponent} from "./categories-list-page/categories-list-page.component";


const routes: Routes = [
  { path: 'categoriesList', component: CategoriesListPageComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PrototypeRoutingModule { }
