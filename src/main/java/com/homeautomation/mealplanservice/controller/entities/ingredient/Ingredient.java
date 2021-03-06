package com.homeautomation.mealplanservice.controller.entities.ingredient;

import com.homeautomation.mealplanservice.controller.entities.ingredient.detail.IngredientDetail;
import com.homeautomation.mealplanservice.entites.meal.Meal;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
public class Ingredient {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private long id;

    @ManyToOne
    private IngredientDetail ingredientDetail;

    private double quantity;

    private String unit;

    public Ingredient(IngredientDetail ingredientDetail, double quantity, String unit) {
        this.ingredientDetail = ingredientDetail;
        this.quantity = quantity;
        this.unit = unit;
    }

    public Ingredient() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public IngredientDetail getIngredientDetail() {
        return ingredientDetail;
    }

    public void setIngredientDetail(IngredientDetail ingredientDetail) {
        this.ingredientDetail = ingredientDetail;
    }

    public double getQuantity() {
        return quantity;
    }

    public void setQuantity(double quantity) {
        this.quantity = quantity;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }
}
