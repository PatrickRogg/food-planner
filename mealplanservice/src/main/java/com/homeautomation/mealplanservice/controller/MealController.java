package com.homeautomation.mealplanservice.controller;


import com.homeautomation.mealplanservice.configuration.RestApiUrlConstants;
import com.homeautomation.mealplanservice.entites.meal.Meal;
import com.homeautomation.mealplanservice.entites.meal.MealService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping(RestApiUrlConstants.MEAL_API_URL)
public class MealController {
    @Autowired
    private MealService mealService;

    @GetMapping()
    public List<Meal> getAllMeals() {
        return mealService.findAll();
    }

    @GetMapping("{id}")
    public Meal getMeal(@PathVariable("id") long id) {
        return mealService.findBy(id);
    }

    @PostMapping()
    public Meal createMeal(@RequestBody Meal meal) {
        return mealService.create(meal);
    }

    @PutMapping("{id}")
    public Meal updateMeal(@PathVariable("id") long id, @RequestBody Meal meal) {
        return mealService.update(meal);
    }

    @DeleteMapping("{id}")
    public void deleteMeal(@PathVariable("id") long id) {
        mealService.deleteBy(id);
    }
}
