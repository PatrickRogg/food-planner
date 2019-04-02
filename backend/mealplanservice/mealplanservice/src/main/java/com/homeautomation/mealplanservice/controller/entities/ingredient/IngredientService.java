package com.homeautomation.mealplanservice.controller.entities.ingredient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IngredientService {
    @Autowired
    private IngredientRepository ingredientRepository;

    public List<Ingredient> findAll() {
        return ingredientRepository.findAll();
    }

    public Ingredient findBy(long id) {
        return ingredientRepository.findById(id).orElse(null);
    }

    public Ingredient create(Ingredient ingredient) {
        Ingredient existingIngredientWithDesignation = findByDesignation(ingredient.getDesignation());
        if (existingIngredientWithDesignation == null) {
            // TODO Exception
        }
        return ingredientRepository.save(ingredient);
    }

    public  Ingredient findByDesignation(String designation) {
        return ingredientRepository.findByDesignation(designation);
    }

    public Ingredient update(Ingredient ingredient, long id) {
        Ingredient toUpdateIngredient = findBy(id);
        toUpdateIngredient.setDesignation(ingredient.getDesignation());
        return ingredientRepository.save(toUpdateIngredient);
    }

    public void deleteBy(long id) {
        ingredientRepository.deleteById(id);
    }
}
