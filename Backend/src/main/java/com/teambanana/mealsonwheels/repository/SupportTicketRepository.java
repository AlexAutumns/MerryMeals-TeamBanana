package com.teambanana.mealsonwheels.repository;

import com.teambanana.mealsonwheels.Enum.SupportTicketStatus;
import com.teambanana.mealsonwheels.model.SupportTicket;
import com.teambanana.mealsonwheels.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface SupportTicketRepository extends JpaRepository<SupportTicket, Long> {

    // Find tickets by status
    List<SupportTicket> findByStatus(SupportTicketStatus status);

    // Find tickets submitted by a specific user
    List<SupportTicket> findBySubmittedBy(User submittedBy);

    // Find tickets created on a specific date
    List<SupportTicket> findByCreatedDate(LocalDate createdDate);

    // Find tickets created between two dates
    List<SupportTicket> findByCreatedDateBetween(LocalDate startDate, LocalDate endDate);

    // Find tickets by subject containing a keyword (case insensitive)
    List<SupportTicket> findBySubjectContainingIgnoreCase(String keyword);
}
