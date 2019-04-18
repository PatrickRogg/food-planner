import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Ingredient } from 'src/models/ingredient.model';
import { GroceryList } from 'src/models/grocery-list.model';
import { GroceryListApiService } from '../shared/service/api/grocery-list-api.service';
import { ViewController } from '@ionic/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.page.html',
  styleUrls: ['./grocery-list.page.scss'],
})
export class GroceryListPage implements OnInit {
  groceryLists: GroceryList[] = [];

  constructor(
    private store: Store<any>,
    private groceryListApiService: GroceryListApiService,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter () {
    this.getGroceryLists();
  }

  getGroceryLists() {
    // this.store.select('groceryList').subscribe(data => {
    //   this.groceryLists = [];
    //   const groceryListAsObject = data.entities;
    //   Object.keys(groceryListAsObject).forEach(key => {
    //     const groceryList: GroceryList = groceryListAsObject[key];
    //     this.groceryLists.push(groceryList);
    //   });
    // });
    this.groceryListApiService.getCurrentPlan().subscribe(data => this.groceryLists = data);
  }

  public addToBought(ingredient: Ingredient, groceryList: GroceryList) {
    groceryList.boughtIngredients.push(ingredient);
    for (let index = 0; index < groceryList.toBuyIngredients.length; index++) {
      const element = groceryList.toBuyIngredients[index];
      if (ingredient.id === element.id) {
        groceryList.toBuyIngredients.splice(index, 1);
        break;
      }
    }
    this.groceryListApiService.updateGroceryList(groceryList).subscribe();
  }

  public removeFromBought(ingredient: Ingredient, groceryList: GroceryList) {
    groceryList.toBuyIngredients.push(ingredient);
    for (let index = 0; index < groceryList.boughtIngredients.length; index++) {
      const element = groceryList.boughtIngredients[index];
      if (ingredient.id === element.id) {
        groceryList.boughtIngredients.splice(index, 1);
        break;
      }
    }
    this.groceryListApiService.updateGroceryList(groceryList).subscribe();
  }
}
