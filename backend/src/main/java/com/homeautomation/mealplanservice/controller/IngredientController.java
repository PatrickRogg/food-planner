package com.homeautomation.mealplanservice.controller;

import com.homeautomation.mealplanservice.configuration.RestApiUrlConstants;
import com.homeautomation.mealplanservice.controller.entities.ingredient.Ingredient;
import com.homeautomation.mealplanservice.controller.entities.ingredient.IngredientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping(RestApiUrlConstants.INGREDIENT_API_URL)
@CrossOrigin
public class IngredientController {
    @Autowired
    private IngredientService ingredientService;

    @GetMapping()
    public List<Ingredient> getAllIngredients() {
        return ingredientService.findAll();
    }

    @GetMapping("{id}")
    public Ingredient getIngredient(@PathVariable("id") long id) {
        return ingredientService.findBy(id);
    }

    @PostMapping()
    public Ingredient createIngredient(@RequestBody Ingredient ingredient) {
        return ingredientService.create(ingredient);
    }

    @PutMapping("{id}")
    public Ingredient updateIngredient(@PathVariable("id") long id, @RequestBody Ingredient ingredient) {
        return ingredientService.update(ingredient, id);
    }

    @DeleteMapping("{id}")
    public void deleteIngredient(@PathVariable("id") long id) {
        ingredientService.deleteBy(id);
    }
}
