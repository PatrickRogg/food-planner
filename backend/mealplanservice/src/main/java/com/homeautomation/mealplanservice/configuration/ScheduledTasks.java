package com.homeautomation.mealplanservice.configuration;

import com.homeautomation.mealplanservice.entites.weekday.WeekdayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class ScheduledTasks {

    @Autowired
    private WeekdayService weekdayService;

    @Scheduled(cron = "30 2 * * * ?")
    private void updateWeekdays() {
        weekdayService.createWeekdayAndDeleteOldWeekday();
    }
}
