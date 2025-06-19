package com.teambanana.mealsonwheels.service.Interface;

import com.teambanana.mealsonwheels.model.VolunteerSchedule;
import java.util.List;
import java.util.Optional;

public interface VolunteerScheduleService {
    VolunteerSchedule assignSchedule(VolunteerSchedule schedule); // TODO: Add DTO and validation
    List<VolunteerSchedule> getAllSchedules();
    Optional<VolunteerSchedule> getScheduleById(Long id);
    VolunteerSchedule updateSchedule(Long id, VolunteerSchedule updatedSchedule); // TODO: Use DTO
    void deleteSchedule(Long id);
}
