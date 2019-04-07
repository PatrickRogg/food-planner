import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Meal } from 'src/models/meal.model';
import { Store } from '@ngrx/store';
import { CreateMeal } from '../shared/ngrx/actions/meal.actions';
import { Ingredient } from 'src/models/ingredient.model';
import { DeleteIngredient } from '../shared/ngrx/actions/ingredient.actions';
import { ModalController } from '@ionic/angular';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';

@Component({
  selector: 'app-meal-create-edit',
  templateUrl: './meal-create-edit.page.html',
  styleUrls: ['./meal-create-edit.page.scss'],
})
export class MealCreateEditPage implements OnInit {
  meal: Meal;
  private ingredientModal: HTMLIonModalElement;

  constructor(
    private router: Router,
    private store: Store<any>,
    public modalController: ModalController,
  ) { }

  ngOnInit() {
    this.meal = new Meal('', []);
  }

  public async onAddIngredientClick() {
    await this.openModal();
    await this.onModalDismiss();
    return await this.ingredientModal.present();
  }

  public deleteIngredient(ingredient: Ingredient) {
    this.store.dispatch(new DeleteIngredient(ingredient.id));
  }

  public async onCreateButtonClick() {
    if (this.meal.designation !== '') {
      this.meal.id = Date.now();
      this.store.dispatch(new CreateMeal(this.meal));
      this.router.navigate(['meal-list']);
    }
  }

  async openModal() {
    this.ingredientModal = await this.modalController.create({
      component: AddIngredientComponent
    });
  }

  async onModalDismiss() {
    this.ingredientModal.onDidDismiss().then((data) => {
      this.meal.ingredients.push(data.data);
    });
  }
}
