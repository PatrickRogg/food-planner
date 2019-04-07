package com.homeautomation.mealplanservice.controller.entities.ingredient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
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

        if (toUpdateIngredient == null) {
            toUpdateIngredient = new Ingredient(ingredient.getDesignation(), ingredient.getQuantity(), ingredient.getUnit());
        } else {
            toUpdateIngredient.setDesignation(ingredient.getDesignation());
        }
        return ingredientRepository.save(toUpdateIngredient);
    }

    public void deleteBy(long id) {
        ingredientRepository.deleteById(id);
    }

    public List<Ingredient> updateMultipleIngredients(List<Ingredient> ingredients) {
        List<Ingredient> savedIngredients = new ArrayList<>();
        for (Ingredient ingredient : ingredients) {
                savedIngredients.add(ingredientRepository.save(ingredient));
        }
        return ingredientRepository.saveAll(ingredients);
    }
}
