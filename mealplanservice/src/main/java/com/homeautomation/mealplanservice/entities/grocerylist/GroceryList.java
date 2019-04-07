package com.homeautomation.mealplanservice.entities.grocerylist;

import com.homeautomation.mealplanservice.controller.entities.ingredient.Ingredient;
import com.homeautomation.mealplanservice.entites.weekday.Weekday;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;

@Entity
public class GroceryList {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private long id;

    @OneToOne
    private Weekday weekday;

    @ManyToMany
    private List<Ingredient> boughtIngredients;

    @ManyToMany
    private List<Ingredient> toBuyIngredients;

    public GroceryList(Weekday weekday, List<Ingredient> boughtIngredients, List<Ingredient> toBuyIngredients) {
        this.weekday = weekday;
        this.boughtIngredients = boughtIngredients;
        this.toBuyIngredients = toBuyIngredients;
    }

    public GroceryList() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Weekday getWeekday() {
        return weekday;
    }

    public void setWeekday(Weekday weekday) {
        this.weekday = weekday;
    }

    public List<Ingredient> getBoughtIngredients() {
        return boughtIngredients;
    }

    public void setBoughtIngredients(List<Ingredient> boughtIngredients) {
        this.boughtIngredients = boughtIngredients;
    }

    public List<Ingredient> getToBuyIngredients() {
        return toBuyIngredients;
    }

    public void setToBuyIngredients(List<Ingredient> toBuyIngredients) {
        this.toBuyIngredients = toBuyIngredients;
    }
}
