package com.homeautomation.mealplanservice.controller;

import com.homeautomation.mealplanservice.configuration.RestApiUrlConstants;
import com.homeautomation.mealplanservice.controller.entities.ingredient.Ingredient;
import com.homeautomation.mealplanservice.controller.entities.ingredient.IngredientService;
import com.homeautomation.mealplanservice.entites.meal.Meal;
import com.homeautomation.mealplanservice.entites.meal.MealService;
import com.homeautomation.mealplanservice.entites.weekday.Weekday;
import com.homeautomation.mealplanservice.entites.weekday.WeekdayService;
import com.homeautomation.mealplanservice.entities.grocerylist.GroceryList;
import com.homeautomation.mealplanservice.entities.grocerylist.GroceryListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping(RestApiUrlConstants.APP_CLOSE)
@CrossOrigin
public class AppCloseController {
    @Autowired
    private GroceryListService groceryListService;

    @Autowired
    private WeekdayService weekdayService;

    @Autowired
    private MealService mealService;

    @Autowired
    private IngredientService ingredientService;

    @PutMapping()
    public void updateDatabaseAfterAppClase(@RequestBody List<GroceryList> groceryLists) {
        for (GroceryList groceryList: groceryLists) {
            updateWeekdays(groceryList.getWeekday());
            groceryListService.update(groceryList);
        }
    }

    private void updateWeekdays(Weekday weekday) {
        updateMeal(weekday.getBreakfast());
        updateMeal(weekday.getLunch());
        updateMeal(weekday.getDinner());
        weekdayService.update(weekday);
    }

    private void updateMeal(Meal meal) {
        for (Ingredient ingredient : meal.getIngredients()) {
            ingredientService.update(ingredient, ingredient.getId());
        }
        mealService.update(meal);
    }
}
