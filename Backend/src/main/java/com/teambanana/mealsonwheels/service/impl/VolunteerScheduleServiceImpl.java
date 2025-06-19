package com.teambanana.mealsonwheels.service.impl;

import com.teambanana.mealsonwheels.model.VolunteerSchedule;
import com.teambanana.mealsonwheels.repository.VolunteerScheduleRepository;
import com.teambanana.mealsonwheels.service.Interface.VolunteerScheduleService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VolunteerScheduleServiceImpl implements VolunteerScheduleService {

    private final VolunteerScheduleRepository scheduleRepository;

    public VolunteerScheduleServiceImpl(VolunteerScheduleRepository scheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }

    @Override
    public VolunteerSchedule assignSchedule(VolunteerSchedule schedule) {
        return scheduleRepository.save(schedule); // TODO: Use DTO + validation
    }

    @Override
    public List<VolunteerSchedule> getAllSchedules() {
        return scheduleRepository.findAll();
    }

    @Override
    public Optional<VolunteerSchedule> getScheduleById(Long id) {
        return scheduleRepository.findById(id);
    }

    @Override
    public VolunteerSchedule updateSchedule(Long id, VolunteerSchedule updatedSchedule) {
        return scheduleRepository.findById(id)
                .map(s -> {
                    s.setVolunteer(updatedSchedule.getVolunteer());
                    s.setScheduleDate(updatedSchedule.getScheduleDate());
                    return scheduleRepository.save(s);
                }).orElseThrow(() -> new RuntimeException("Schedule not found with id " + id));
    }

    @Override
    public void deleteSchedule(Long id) {
        scheduleRepository.deleteById(id);
    }
}
