import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [{
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../planned-meals-overview/planned-meals-overview.module#PlannedMealsOverviewPageModule'
          }
        ]
      },
      {
        path: 'meal-list',
        children: [
          {
            path: '',
            loadChildren: '../meal-list/meal-list.module#MealListPageModule'
          }
        ]
      },
      {
        path: 'grocery-list',
        children: [
          {
            path: '',
            loadChildren: '../grocery-list/grocery-list.module#GroceryListPageModule'
          }
        ]
      }
    ]
  }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
