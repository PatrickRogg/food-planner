import { Component, OnInit } from '@angular/core';
import { IngredientDetail } from '../shared/models/ingredient-detail.model';
import { Router, ActivatedRoute } from '@angular/router';
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
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.ingredientDetail = new IngredientDetail('');
    if (window.history.state.id) {
      this.title = 'Edit ';
      this.ingredientDetail.id = window.history.state.id;
      this.ingredientDetail.designation = window.history.state.designation;
    }
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
