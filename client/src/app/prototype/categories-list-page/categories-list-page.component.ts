import {Component, OnInit} from '@angular/core';
import {CategoryI} from "../interfaces/category.interfaces";

@Component({
  selector: 'app-categories-list-page',
  templateUrl: './categories-list-page.component.html',
  styleUrls: ['./categories-list-page.component.scss']
})
export class CategoriesListPageComponent implements OnInit {

  categories: Array<CategoryI> = [
    {id: 1, title: 'Развлечение', subtitle: 'Развлечение subtitle', description: 'Описание раздела с развлечениями'},
    {id: 2, title: 'Обучение', subtitle: 'Обучение subtitle', description: 'Описание раздела с обучением'}
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
