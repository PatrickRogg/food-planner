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
    },
    {
      path: 'meal-create-edit',
      children: [
        {
          path: '',
          loadChildren: '../meal-create-edit/meal-create-edit.module#MealCreateEditPageModule'
        }
      ]
    },
    {
      path: 'meal-detail',
      children: [
        {
          path: '',
          loadChildren: '../meal-detail/meal-detail.module#MealDetailPageModule'
        }
      ]
    }
  ]
},
{
  path: '',
  redirectTo: '/tabs/home',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage],
  exports: [TabsPage]
})
export class TabsPageModule { }
