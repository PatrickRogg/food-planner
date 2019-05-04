package com.homeautomation.mealplanservice.configuration;

import com.homeautomation.mealplanservice.entites.weekday.Weekday;
import com.homeautomation.mealplanservice.entites.weekday.WeekdayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import java.time.LocalDate;

@Configuration
@EnableScheduling
public class ScheduledTasks {

    @Autowired
    private WeekdayService weekdayService;

    @Scheduled(cron = "0 30 1 * * ?")
    private void createNewWeekday() {
        weekdayService.create(new Weekday(LocalDate.now().plusDays(3), null, null, null));
        System.out.println("weekday created");
    }
}
