import { Component, OnInit } from '@angular/core';
import { IngredientDetail } from '../shared/models/ingredient-detail.model';
import { Router } from '@angular/router';
import { IngredientDetailApiService } from '../shared/services/api/ingredient-detail-api.service';

@Component({
  selector: 'app-ingredient-create-edit',
  templateUrl: './ingredient-create-edit.component.html',
  styleUrls: ['./ingredient-create-edit.component.scss']
})
export class IngredientCreateEditComponent implements OnInit {
  title = 'Create ';
  ingredientDetail: IngredientDetail;
  constructor(
    private ingredientDetailApiService: IngredientDetailApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ingredientDetail = new IngredientDetail('');
  }

  public submitForm() {
    if (this.ingredientDetail.designation !== '') {
      this.ingredientDetailApiService
        .create(this.ingredientDetail).subscribe(data => {
          this.router.navigate(['']);
        });
    }
  }
}
