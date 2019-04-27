package com.homeautomation.mealplanservice.entites.weekday;

import com.homeautomation.mealplanservice.entites.meal.Meal;
import com.homeautomation.mealplanservice.entities.grocerylist.GroceryList;
import com.homeautomation.mealplanservice.entities.grocerylist.GroceryListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@Transactional
public class WeekdayService {
    @Autowired
    private WeekdayRepository weekdayRepository;

    @Autowired
    private GroceryListService groceryListService;

    public List<Weekday> findAll() {
        return weekdayRepository.findAll();
    }

    public Weekday findBy(long id) {
        return weekdayRepository.findById(id).orElse(null);
    }

    public Weekday create(Weekday weekday) {
        Weekday createdWeekday= weekdayRepository.save(weekday);
        groceryListService.create(weekday);
        return createdWeekday;
    }

    public Weekday update(Weekday weekday) {
        Weekday updatedWeekday = weekdayRepository.save(weekday);
        groceryListService.updateToBuyIngredients(updatedWeekday);
        return updatedWeekday;
    }

    public void deleteById(long id) {
        weekdayRepository.deleteById(id);
    }

    public List<Weekday> findCurrentPlanWeekdays() {
        LocalDate currDate = LocalDate.now();
        return Stream.of(currDate, currDate.plusDays(1), currDate.plusDays(2), currDate.plusDays(3))
                .map(date -> weekdayRepository.findByDate(date))
                .collect(Collectors.toList());
    }
}
