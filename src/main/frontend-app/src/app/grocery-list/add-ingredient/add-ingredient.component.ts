import { Component, OnInit } from '@angular/core';
import { IngredientDetailApiService } from 'src/app/shared/service/api/ingredient-detail-api.service';
import { IngredientDetail } from 'src/models/ingredient-detail.model';
import { ModalController, NavParams } from '@ionic/angular';
import { GroceryList } from 'src/models/grocery-list.model';
import { GroceryListApiService } from 'src/app/shared/service/api/grocery-list-api.service';
import { Ingredient } from 'src/models/ingredient.model';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss'],
})
export class AddIngredientComponent implements OnInit {
  ingredientDetails: IngredientDetail[] = [];
  filteredIngredientDetails: IngredientDetail[] = [];
  searchText = '';
  groceryList: GroceryList;
  ingredient = new Ingredient(null, 0, '');

  constructor(
    private ingredientDetailApiService: IngredientDetailApiService,
    private groceryListApiService: GroceryListApiService,
    private modalController: ModalController,
    private navParams: NavParams) { }

  ngOnInit() {
    this.getAllIngredientDetailsFromServer();
  }

  ionViewWillEnter() {
    this.groceryList = this.navParams.get('groceryList');
  }

  getAllIngredientDetailsFromServer() {
    this.ingredientDetailApiService.getIngredientDetails().subscribe(data => {
      this.ingredientDetails = data;
      this.filteredIngredientDetails = data;
    });
  }

  public onInputChange(event) {
    this.filteredIngredientDetails = this.ingredientDetails.filter(obj => {
      if (obj.designation.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase())) {
        return true;
      }
      return false;
    });
  }

  public selectIngredientDetail(ingredientDetail: IngredientDetail) {
    this.ingredient.ingredientDetail = ingredientDetail;
    this.groceryList.toBuyIngredients.push(this.ingredient);

    this.groceryListApiService.updateGroceryList(this.groceryList).subscribe(data => this.dismissModal(data));
  }

  public async dismissModal(groceryList?: GroceryList) {
    await this.modalController.dismiss(groceryList);
  }
}
