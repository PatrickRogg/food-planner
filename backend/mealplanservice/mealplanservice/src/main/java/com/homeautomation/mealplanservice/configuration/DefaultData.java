package com.homeautomation.mealplanservice.configuration;

import com.homeautomation.mealplanservice.controller.entities.ingredient.Ingredient;
import com.homeautomation.mealplanservice.controller.entities.ingredient.IngredientService;
import com.homeautomation.mealplanservice.entites.meal.Meal;
import com.homeautomation.mealplanservice.entites.meal.MealService;
import com.homeautomation.mealplanservice.entites.weekday.Weekday;
import com.homeautomation.mealplanservice.entites.weekday.WeekdayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.event.EventListener;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

@Configuration
public class DefaultData {

    @Autowired
    private IngredientService ingredientService;

    @Autowired
    private WeekdayService weekdayService;

    @Autowired
    private MealService mealService;

    @EventListener(ApplicationReadyEvent.class)
    public synchronized void createDefaultData() {
    	ingredientService.create(new Ingredient("Tomate", 10.0, "kg", false));
    	ingredientService.create(new Ingredient("Mais", 1.0, "kg", false));
    	ingredientService.create(new Ingredient("Milch", 10.0, "kg", false));
    	ingredientService.create(new Ingredient("Nudeln", 3.0, "kg", false));
    	ingredientService.create(new Ingredient("Reis", 120.0, "kg", false));
    	ingredientService.create(new Ingredient("Karotte", 123.0, "kg", false));
        ingredientService.create(new Ingredient("Oliven", 10.0, "kg", false));
        ingredientService.create(new Ingredient("Rind", 1.0, "kg", false));
        ingredientService.create(new Ingredient("Schwein", 10.0, "kg", false));
        ingredientService.create(new Ingredient("Käse", 3.0, "kg", false));
        ingredientService.create(new Ingredient("Petersilie", 120.0, "kg", false));
        ingredientService.create(new Ingredient("Champions", 123.0, "kg", false));

        mealService.create(new Meal("Spaghetti Bolonese", Arrays.asList(new Ingredient[]{ingredientService.findBy(1L), ingredientService.findBy(2L)})));
        mealService.create(new Meal("Spaghetti Carbonara", Arrays.asList(new Ingredient[]{ingredientService.findBy(3L), ingredientService.findBy(4L)})));
        mealService.create(new Meal("Pizza", Arrays.asList(new Ingredient[]{ingredientService.findBy(5L), ingredientService.findBy(6L)})));
        mealService.create(new Meal("Salat", Arrays.asList(new Ingredient[]{ingredientService.findBy(7L), ingredientService.findBy(8L)})));
        mealService.create(new Meal("Reis mit Huhn", Arrays.asList(new Ingredient[]{ingredientService.findBy(9L), ingredientService.findBy(10L)})));

        weekdayService.create(new Weekday(LocalDate.now(), mealService.findBy(1L),
                mealService.findBy(2L), mealService.findBy(3L)));
        weekdayService.create(new Weekday(LocalDate.now().plusDays(1), mealService.findBy(1L),
                mealService.findBy(2L), mealService.findBy(3L)));
        weekdayService.create(new Weekday(LocalDate.now().plusDays(2), mealService.findBy(1L),
                mealService.findBy(2L), mealService.findBy(3L)));
        weekdayService.create(new Weekday(LocalDate.now().plusDays(3), mealService.findBy(1L),
                mealService.findBy(2L), mealService.findBy(3L)));

    }
}
