import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesListPageComponent } from './categories-list-page/categories-list-page.component';
import {PrototypeRoutingModule} from "./prototype-routing.module";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    CategoriesListPageComponent
  ],
  imports: [
    CommonModule,
    PrototypeRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class PrototypeModule { }
