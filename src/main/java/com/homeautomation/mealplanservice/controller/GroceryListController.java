package com.homeautomation.mealplanservice.controller;

import com.homeautomation.mealplanservice.configuration.RestApiUrlConstants;
import com.homeautomation.mealplanservice.entities.grocerylist.GroceryList;
import com.homeautomation.mealplanservice.entities.grocerylist.GroceryListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping(RestApiUrlConstants.GROCERYLIST_API_URL)
@CrossOrigin
public class GroceryListController {
    @Autowired
    private GroceryListService groceryListService;

    @GetMapping()
    public List<GroceryList> getAll() {
        return groceryListService.findAll();
    }

    @GetMapping("current-plan")
    public List<GroceryList> getCurrentPlan() {
        return groceryListService.findAllByCurrentPlan();
    }

    @GetMapping("{id}")
    public GroceryList get(@PathVariable("id") long id) {
        return groceryListService.findBy(id);
    }

    @PutMapping("{id}")
    public GroceryList update(@PathVariable("id") long id, @RequestBody GroceryList groceryList) {
        return groceryListService.update(groceryList);
    }
}
