package com.homeautomation.mealplanservice.entites.weekday;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;

@Repository
public interface WeekdayRepository extends JpaRepository<Weekday, Long> {
    Weekday findByDate(LocalDate date);
}
