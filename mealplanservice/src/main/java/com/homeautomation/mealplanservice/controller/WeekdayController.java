package com.homeautomation.mealplanservice.controller;


import com.homeautomation.mealplanservice.configuration.RestApiUrlConstants;
import com.homeautomation.mealplanservice.entites.weekday.Weekday;
import com.homeautomation.mealplanservice.entites.weekday.WeekdayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping(RestApiUrlConstants.WEEKDAY_API_URL)
public class WeekdayController {
    @Autowired
    private WeekdayService weekdayService;

    @GetMapping()
    public List<Weekday> getAllWeekdays() {
        return weekdayService.findAll();
    }

    @GetMapping("plan")
    public List<Weekday> getCurrentAndNextThreeWeekdays() {
        return weekdayService.findCurrentPlanWeekdays();
    }

    @GetMapping("{id}")
    public Weekday getWeekday(@PathVariable("id") long id) {
        return weekdayService.findBy(id);
    }

    @PostMapping()
    public Weekday createWeekday(@RequestBody Weekday Weekday) {
        return weekdayService.create(Weekday);
    }

    @PutMapping("{id}")
    public Weekday updateWeekday(@PathVariable("id") long id, @RequestBody Weekday weekday) {
        return weekdayService.update(weekday);
    }

    @DeleteMapping("{id}")
    public void deleteWeekday(@PathVariable("id") long id) {
        weekdayService.deleteById(id);
    }
}
