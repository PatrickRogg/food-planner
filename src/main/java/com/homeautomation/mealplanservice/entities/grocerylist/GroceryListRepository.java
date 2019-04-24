package com.homeautomation.mealplanservice.entities.grocerylist;

import com.homeautomation.mealplanservice.entites.weekday.Weekday;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GroceryListRepository extends JpaRepository<GroceryList, Long> {
    List<GroceryList> findByWeekdayIn(List<Weekday> currentPlanWeekdays);
    GroceryList findByWeekday(Weekday weekday);
}
