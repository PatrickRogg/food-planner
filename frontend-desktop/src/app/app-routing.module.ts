import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IngredientCreateEditComponent } from './ingredient-create-edit/ingredient-create-edit.component';
import { MealCreateEditComponent } from './meal-create-edit/meal-create-edit.component';

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'create-meal', component: MealCreateEditComponent },
    { path: 'edit-meal/:id', component: MealCreateEditComponent },
    { path: 'create-ingredient', component: IngredientCreateEditComponent },
    { path: 'edit-ingredient/:id', component: IngredientCreateEditComponent },
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
