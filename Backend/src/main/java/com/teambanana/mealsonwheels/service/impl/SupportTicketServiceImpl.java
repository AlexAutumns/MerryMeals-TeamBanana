package com.teambanana.mealsonwheels.service.impl;

import com.teambanana.mealsonwheels.model.SupportTicket;
import com.teambanana.mealsonwheels.repository.SupportTicketRepository;
import com.teambanana.mealsonwheels.service.Interface.SupportTicketService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SupportTicketServiceImpl implements SupportTicketService {

    private final SupportTicketRepository supportTicketRepository;

    public SupportTicketServiceImpl(SupportTicketRepository supportTicketRepository) {
        this.supportTicketRepository = supportTicketRepository;
    }

    @Override
    public SupportTicket submitTicket(SupportTicket ticket) {
        return supportTicketRepository.save(ticket); // TODO: Use DTO + validation
    }

    @Override
    public List<SupportTicket> getAllTickets() {
        return supportTicketRepository.findAll();
    }

    @Override
    public Optional<SupportTicket> getTicketById(Long id) {
        return supportTicketRepository.findById(id);
    }

    @Override
    public SupportTicket updateTicketStatus(Long id, SupportTicket updatedTicket) {
        return supportTicketRepository.findById(id)
                .map(ticket -> {
                    ticket.setStatus(updatedTicket.getStatus());
                    ticket.setResponse(updatedTicket.getResponse());
                    return supportTicketRepository.save(ticket);
                }).orElseThrow(() -> new RuntimeException("SupportTicket not found with id " + id));
    }

    @Override
    public void deleteTicket(Long id) {
        supportTicketRepository.deleteById(id);
    }
}
