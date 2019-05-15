package com.homeautomation.mealplanservice.entities.grocerylist;

import com.homeautomation.mealplanservice.controller.entities.ingredient.Ingredient;
import com.homeautomation.mealplanservice.controller.entities.ingredient.IngredientService;
import com.homeautomation.mealplanservice.entites.weekday.Weekday;
import com.homeautomation.mealplanservice.entites.weekday.WeekdayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class GroceryListService {
    @Autowired
    private GroceryListRepository groceryListRepository;
    @Autowired
    private IngredientService ingredientService;

    @Autowired
    private WeekdayService weekdayService;

    public List<GroceryList> findAll() {
        return groceryListRepository.findAll();
    }

    public GroceryList findBy(long id) {
        return groceryListRepository.findById(id).orElse(null);
    }

    public GroceryList create(Weekday weekday) {
        GroceryList groceryList = new GroceryList();
        groceryList.setWeekday(weekday);
        groceryList.setToBuyIngredients(getIngredientsFromWeekday(weekday));
        return groceryListRepository.save(groceryList);
    }

    private List<Ingredient> getIngredientsFromWeekday(Weekday weekday) {
        List<Ingredient> toBuyIngredients = new ArrayList<>();
        if (weekday.getBreakfast() != null) {
            toBuyIngredients.addAll(weekday.getBreakfast().getIngredients());
        }
        if (weekday.getLunch() != null) {
            toBuyIngredients.addAll(weekday.getLunch().getIngredients());
        }
        if (weekday.getDinner() != null) {
            toBuyIngredients.addAll(weekday.getDinner().getIngredients());
        }
        return toBuyIngredients;
    }

    public GroceryList update(GroceryList groceryList) {
        GroceryList toUpdateGroceryList = groceryListRepository.findById(groceryList.getId()).orElse(null);

        Ingredient unsavedIngredient = null;
        for (Ingredient ingredient : groceryList.getToBuyIngredients()) {
            if (ingredient.getId() == 0) {
                unsavedIngredient = ingredient;
                break;
            }
        }

        if (unsavedIngredient != null) {
            groceryList.getToBuyIngredients().add(ingredientService.create(unsavedIngredient));
        }

        toUpdateGroceryList.setBoughtIngredients(groceryList.getBoughtIngredients());
        toUpdateGroceryList.setToBuyIngredients(groceryList.getToBuyIngredients());

        return groceryListRepository.save(toUpdateGroceryList);
    }

    public void deleteBy(long id) {
        groceryListRepository.deleteById(id);
    }

    public List<GroceryList> findAllByCurrentPlan() {
        List<Weekday> currentPlanWeekdays = weekdayService.findCurrentPlanWeekdays();
        return groceryListRepository.findByWeekdayIn(currentPlanWeekdays);
    }

    public void updateToBuyIngredients(Weekday weekday) {
        GroceryList groceryListOfWeekday = groceryListRepository.findByWeekday(weekday);
        groceryListOfWeekday.setToBuyIngredients(getIngredientsFromWeekday(weekday));
        groceryListOfWeekday.setBoughtIngredients(new ArrayList<>());
        update(groceryListOfWeekday);
    }
}
