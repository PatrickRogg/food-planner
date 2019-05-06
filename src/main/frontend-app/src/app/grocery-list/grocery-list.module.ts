import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GroceryListPage } from './grocery-list.page';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';

const routes: Routes = [
  {
    path: '',
    component: GroceryListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GroceryListPage, AddIngredientComponent],
  entryComponents: [AddIngredientComponent]
})
export class GroceryListPageModule {}
