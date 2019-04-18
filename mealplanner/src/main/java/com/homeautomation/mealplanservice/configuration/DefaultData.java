package com.homeautomation.mealplanservice.configuration;

import com.homeautomation.mealplanservice.controller.entities.ingredient.Ingredient;
import com.homeautomation.mealplanservice.controller.entities.ingredient.IngredientService;
import com.homeautomation.mealplanservice.controller.entities.ingredient.detail.IngredientDetail;
import com.homeautomation.mealplanservice.controller.entities.ingredient.detail.IngredientDetailService;
import com.homeautomation.mealplanservice.entites.meal.Meal;
import com.homeautomation.mealplanservice.entites.meal.MealService;
import com.homeautomation.mealplanservice.entites.weekday.Weekday;
import com.homeautomation.mealplanservice.entites.weekday.WeekdayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.event.EventListener;

import java.time.LocalDate;
import java.util.Arrays;

@Configuration
public class DefaultData {

    @Autowired
    private IngredientService ingredientService;

    @Autowired
    private IngredientDetailService ingredientDetailService;

    @Autowired
    private WeekdayService weekdayService;

    @Autowired
    private MealService mealService;

//    @EventListener(ApplicationReadyEvent.class)
//    public synchronized void createDefaultData() {
//        if (weekdayService. findAll().size() == 0) {
//            weekdayService.create(new Weekday(LocalDate.now()));
//            weekdayService.create(new Weekday(LocalDate.now().plusDays(1)));
//            weekdayService.create(new Weekday(LocalDate.now().plusDays(2)));
//            weekdayService.create(new Weekday(LocalDate.now().plusDays(3)));
//        }
//    }

    @EventListener(ApplicationReadyEvent.class)
    public synchronized void createDefaultData() {
        IngredientDetail ingredientDetail = ingredientDetailService.create(new IngredientDetail("Tomate"));
        IngredientDetail ingredientDetail1 = ingredientDetailService.create(new IngredientDetail("Mais"));
        IngredientDetail ingredientDetail2 = ingredientDetailService.create(new IngredientDetail("Gurke"));
        IngredientDetail ingredientDetail3 = ingredientDetailService.create(new IngredientDetail("Avocado"));
        IngredientDetail ingredientDetail4 = ingredientDetailService.create(new IngredientDetail("Zitronen"));
        IngredientDetail ingredientDetail5 = ingredientDetailService.create(new IngredientDetail("Haselnüsse"));
        IngredientDetail ingredientDetail6 = ingredientDetailService.create(new IngredientDetail("Petersile"));
        IngredientDetail ingredientDetail7 = ingredientDetailService.create(new IngredientDetail("Brot"));

        ingredientService.create(new Ingredient(ingredientDetail, 1, "kg"));
        ingredientService.create(new Ingredient(ingredientDetail1, 1, "kg"));
        ingredientService.create(new Ingredient(ingredientDetail2, 1, "kg"));
        ingredientService.create(new Ingredient(ingredientDetail3, 1, "kg"));
        ingredientService.create(new Ingredient(ingredientDetail4, 1, "kg"));
        ingredientService.create(new Ingredient(ingredientDetail5, 1, "kg"));
        ingredientService.create(new Ingredient(ingredientDetail6, 1, "kg"));
        ingredientService.create(new Ingredient(ingredientDetail7, 1, "kg"));
        ingredientService.create(new Ingredient(ingredientDetail, 1, "kg"));
        ingredientService.create(new Ingredient(ingredientDetail1, 1, "kg"));
        ingredientService.create(new Ingredient(ingredientDetail2, 1, "kg"));
        ingredientService.create(new Ingredient(ingredientDetail3, 1, "kg"));

        mealService.create(new Meal("Spaghetti Bolonese", "http://google.com", Arrays.asList(new Ingredient[]{ingredientService.findBy(1L), ingredientService.findBy(2L)})));
        mealService.create(new Meal("Spaghetti Carbonara", "http://google.com", Arrays.asList(new Ingredient[]{ingredientService.findBy(3L), ingredientService.findBy(4L)})));
        mealService.create(new Meal("Pizza", "http://google.com", Arrays.asList(new Ingredient[]{ingredientService.findBy(5L), ingredientService.findBy(6L)})));
        mealService.create(new Meal("Salat", "http://google.com", Arrays.asList(new Ingredient[]{ingredientService.findBy(7L), ingredientService.findBy(8L)})));
        mealService.create(new Meal("Reis mit Huhn", "http://google.com", Arrays.asList(new Ingredient[]{ingredientService.findBy(9L), ingredientService.findBy(10L)})));

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
