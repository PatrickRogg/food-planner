import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MealCreateEditPage } from './meal-create-edit.page';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';

const routes: Routes = [
  {
    path: '',
    component: MealCreateEditPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [MealCreateEditPage, AddIngredientComponent],
  entryComponents: [AddIngredientComponent]
})
export class MealCreateEditPageModule {}
