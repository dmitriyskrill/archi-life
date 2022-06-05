import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesListPageComponent } from './categories-list-page/categories-list-page.component';
import {PrototypeRoutingModule} from "./prototype-routing.module";
import {MatSliderModule} from "@angular/material/slider";

@NgModule({
  declarations: [
    CategoriesListPageComponent
  ],
  imports: [
    CommonModule,
    PrototypeRoutingModule,
    MatSliderModule,
  ]
})
export class PrototypeModule { }
