package com.homeautomation.mealplanservice.controller;

import com.homeautomation.mealplanservice.configuration.RestApiUrlConstants;
import com.homeautomation.mealplanservice.controller.entities.ingredient.detail.IngredientDetail;
import com.homeautomation.mealplanservice.controller.entities.ingredient.detail.IngredientDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping(RestApiUrlConstants.INGREDIENT_DETAIL_API_URL)
public class IngredientDetailController {

    @Autowired
    private IngredientDetailService ingredientDetailService;

    @GetMapping()
    public List<IngredientDetail> getAllIngredientDetails() {
        return ingredientDetailService.findAll();
    }

    @GetMapping("{id}")
    public IngredientDetail getIngredientDetail(@PathVariable("id") long id) {
        return ingredientDetailService.findBy(id);
    }

    @PostMapping()
    public IngredientDetail createIngredientDetail(@RequestBody IngredientDetail ingredientDetail) {
        return ingredientDetailService.create(ingredientDetail);
    }

    @PutMapping("{id}")
    public IngredientDetail updateIngredientDetail(@PathVariable("id") long id, @RequestBody IngredientDetail ingredientDetail) {
        return ingredientDetailService.update(ingredientDetail, id);
    }

    @DeleteMapping("{id}")
    public void deleteIngredientDetail(@PathVariable("id") long id) {
        ingredientDetailService.deleteBy(id);
    }
}
