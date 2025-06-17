package com.teambanana.mealsonwheels.controller;

import com.teambanana.mealsonwheels.model.VolunteerSchedule;
import com.teambanana.mealsonwheels.repository.VolunteerScheduleRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/volunteer-schedules")
public class VolunteerScheduleController {

    private final VolunteerScheduleRepository repository;

    public VolunteerScheduleController(VolunteerScheduleRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<VolunteerSchedule> getAllSchedules() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<VolunteerSchedule> getScheduleById(@PathVariable Long id) {
        Optional<VolunteerSchedule> schedule = repository.findById(id);
        return schedule.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public VolunteerSchedule createSchedule(@RequestBody VolunteerSchedule schedule) {
        // TODO: Add validation and DTOs later
        return repository.save(schedule);
    }

    @PutMapping("/{id}")
    public ResponseEntity<VolunteerSchedule> updateSchedule(@PathVariable Long id, @RequestBody VolunteerSchedule scheduleDetails) {
        return repository.findById(id).map(schedule -> {
            schedule.setAvailableDate(scheduleDetails.getAvailableDate());
            schedule.setShift(scheduleDetails.getShift());
            schedule.setVolunteer(scheduleDetails.getVolunteer());
            repository.save(schedule);
            return ResponseEntity.ok(schedule);
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSchedule(@PathVariable Long id) {
        return repository.findById(id).map(schedule -> {
            repository.delete(schedule);
            return ResponseEntity.noContent().<Void>build();
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
