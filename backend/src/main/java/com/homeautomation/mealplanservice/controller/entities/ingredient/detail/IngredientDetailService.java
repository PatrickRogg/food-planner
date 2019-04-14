package com.homeautomation.mealplanservice.controller.entities.ingredient.detail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class IngredientDetailService {
    @Autowired
    private IngredientDetailRepository ingredientDetailRepository;

    public List<IngredientDetail> findAll() {
        return ingredientDetailRepository.findAll();
    }


    public IngredientDetail findBy(long id) {
        return ingredientDetailRepository.findById(id).orElse(null);
    }

    public IngredientDetail create(IngredientDetail ingredientDetail) {
        return ingredientDetailRepository.save(ingredientDetail);
    }

    public IngredientDetail update(IngredientDetail ingredientDetail, long id) {
        return ingredientDetailRepository.save(ingredientDetail);
    }

    public long deleteBy(long id) {
        ingredientDetailRepository.deleteById(id);
        return id;
    }
}
