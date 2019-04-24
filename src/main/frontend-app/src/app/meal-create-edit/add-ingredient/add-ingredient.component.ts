import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Ingredient } from 'src/models/ingredient.model';
import { Store } from '@ngrx/store';
import { CreateIngredient } from 'src/app/shared/ngrx/actions/ingredient.actions';
import { IngredientDetail } from 'src/models/ingredient-detail.model';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss'],
})
export class AddIngredientComponent implements OnInit {
  ingredient: Ingredient;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private store: Store<any>,
  ) { }

  ngOnInit() {
    this.ingredient = new Ingredient(new IngredientDetail(''), 0, '');
  }

  public async dismissModal() {
    await this.modalController.dismiss();
  }

  public async addIngredient() {
    if (this.ingredient.ingredientDetail.designation !== '') {
      this.modalController.dismiss(this.ingredient);
      this.ingredient.id = Date.now();
      this.store.dispatch(new CreateIngredient(this.ingredient));
    }
  }

}
