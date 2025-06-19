package com.teambanana.mealsonwheels.service.Interface;

import com.teambanana.mealsonwheels.model.SupportTicket;
import java.util.List;
import java.util.Optional;

public interface SupportTicketService {
    SupportTicket submitTicket(SupportTicket ticket); // TODO: Add DTO + validation
    List<SupportTicket> getAllTickets();
    Optional<SupportTicket> getTicketById(Long id);
    SupportTicket updateTicketStatus(Long id, SupportTicket updatedTicket); // TODO: Use DTO
    void deleteTicket(Long id);
}
