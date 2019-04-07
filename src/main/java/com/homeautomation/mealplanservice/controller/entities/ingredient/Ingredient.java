package com.homeautomation.mealplanservice.controller.entities.ingredient;

import com.homeautomation.mealplanservice.entites.meal.Meal;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
public class Ingredient {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private long id;

    private String designation;

    private double quantity;

    private String unit;

    public Ingredient(String designation, double quantity, String unit) {
        this.designation = designation;
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

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
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
