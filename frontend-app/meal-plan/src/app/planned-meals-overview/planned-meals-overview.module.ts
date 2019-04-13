import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlannedMealsOverviewPage } from './planned-meals-overview.page';
import { SelectMealComponent } from './select-meal/select-meal.component';

const routes: Routes = [
  {
    path: '',
    component: PlannedMealsOverviewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlannedMealsOverviewPage, SelectMealComponent],
  entryComponents: [SelectMealComponent]
})
export class PlannedMealsOverviewPageModule {}
