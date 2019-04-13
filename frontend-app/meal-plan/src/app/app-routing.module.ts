import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './planned-meals-overview/planned-meals-overview.module#PlannedMealsOverviewPageModule' },
  { path: 'meal-list', loadChildren: './meal-list/meal-list.module#MealListPageModule' },
  { path: 'meal-create-edit', loadChildren: './meal-create-edit/meal-create-edit.module#MealCreateEditPageModule' },
  { path: 'meal-detail', loadChildren: './meal-detail/meal-detail.module#MealDetailPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'planned-meals-overview', loadChildren: './planned-meals-overview/planned-meals-overview.module#PlannedMealsOverviewPageModule' },
  { path: 'grocery-list', loadChildren: './grocery-list/grocery-list.module#GroceryListPageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
