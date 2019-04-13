package com.homeautomation.mealplanservice.controller.entities.ingredient;

import com.homeautomation.mealplanservice.controller.entities.ingredient.detail.IngredientDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
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
        return ingredientRepository.save(ingredient);
    }

    public Ingredient update(Ingredient ingredient, long id) {
        return ingredientRepository.save(ingredient);
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
