package com.teambanana.mealsonwheels.controller;

import com.teambanana.mealsonwheels.model.SupportTicket;
import com.teambanana.mealsonwheels.repository.SupportTicketRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/support-tickets")
public class SupportTicketController {

    private final SupportTicketRepository supportTicketRepository;

    public SupportTicketController(SupportTicketRepository supportTicketRepository) {
        this.supportTicketRepository = supportTicketRepository;
    }

    @GetMapping
    public List<SupportTicket> getAllTickets() {
        return supportTicketRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<SupportTicket> getTicketById(@PathVariable Long id) {
        return supportTicketRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<SupportTicket> createTicket(@RequestBody SupportTicket ticket) {
        // TODO: Add validation using DTO and @Valid
        return ResponseEntity.ok(supportTicketRepository.save(ticket));
    }

    @PutMapping("/{id}")
    public ResponseEntity<SupportTicket> updateTicket(@PathVariable Long id, @RequestBody SupportTicket updatedTicket) {
        // TODO: Add validation using DTO and @Valid
        return supportTicketRepository.findById(id).map(ticket -> {
            ticket.setSubject(updatedTicket.getSubject());
            ticket.setMessage(updatedTicket.getMessage());
            ticket.setStatus(updatedTicket.getStatus());
            ticket.setResponse(updatedTicket.getResponse());
            return ResponseEntity.ok(supportTicketRepository.save(ticket));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTicket(@PathVariable Long id) {
        if (!supportTicketRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        supportTicketRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
