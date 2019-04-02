package com.homeautomation.mealplanservice.entites.meal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MealService {

    @Autowired
    private MealRepository mealRepository;

    public List<Meal> findAll() {
        return mealRepository.findAll();
    }

    public Meal findBy(long id) {
        return mealRepository.findById(id).orElse(null);
    }

    public Meal create(Meal meal) {
        return mealRepository.save(meal);
    }

    public Meal update(Meal meal) {
        return mealRepository.save(meal);
    }

    public void deleteBy(long id) {
        mealRepository.deleteById(id);
    }


}
