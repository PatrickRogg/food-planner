import { Component, OnInit } from '@angular/core';
import { IngredientDetail } from 'src/app/shared/models/ingredient-detail.model';
import { IngredientDetailApiService } from '../shared/services/api/ingredient-detail-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit {
  ingredientDetails: IngredientDetail[] = [];

  constructor(
    private ingredientDetailApiService: IngredientDetailApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllIngredientDetailsFromServer();
  }

  private getAllIngredientDetailsFromServer() {
    this.ingredientDetailApiService.getAll().subscribe(data => this.ingredientDetails = data);
  }

  public editIngredientDetail(ingredientDetail: IngredientDetail) {
    this.router.navigate(['ingredient-edit', ingredientDetail.id]);
  }

  public deleteIngredientDetail(ingredientDetail: IngredientDetail) {
    this.ingredientDetailApiService.deleteBy(ingredientDetail.id).subscribe();
  }
}
