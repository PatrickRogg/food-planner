import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IngredientCreateEditComponent } from './ingredient-create-edit/ingredient-create-edit.component';
import { MealCreateEditComponent } from './meal-create-edit/meal-create-edit.component';
import { MealListComponent } from './meal-list/meal-list.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IngredientCreateEditComponent,
    MealCreateEditComponent,
    MealListComponent,
    IngredientListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
