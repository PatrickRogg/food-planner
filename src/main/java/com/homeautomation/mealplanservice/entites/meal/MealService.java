package com.homeautomation.mealplanservice.entites.meal;

import com.homeautomation.mealplanservice.controller.entities.ingredient.Ingredient;
import com.homeautomation.mealplanservice.controller.entities.ingredient.IngredientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class MealService {

    @Autowired
    private MealRepository mealRepository;

    @Autowired
    private IngredientService ingredientService;

    public List<Meal> findAll() {
        return mealRepository.findAll();
    }

    public Meal findBy(long id) {
        return mealRepository.findById(id).orElse(null);
    }

    public Meal create(Meal meal) {
        List<Ingredient> ingredients = new ArrayList<>();
        for (Ingredient ingredient: meal.getIngredients()) {
            ingredients.add(ingredientService.create(ingredient));
        }
        meal.setIngredients(ingredients);
        return mealRepository.save(meal);
    }

    public Meal update(Meal meal) {
        return mealRepository.save(meal);
    }

    public void deleteBy(long id) {
        mealRepository.deleteById(id);
    }
}
