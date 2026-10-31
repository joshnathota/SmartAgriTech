
package com.smartagritech.backend.controller;

import com.smartagritech.backend.model.AiChatHistory;
import com.smartagritech.backend.repository.AiChatHistoryRepository;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ai/history")
@CrossOrigin(origins = "*")
public class AiChatHistoryController {

    private final AiChatHistoryRepository historyRepository;

    public AiChatHistoryController(
            AiChatHistoryRepository historyRepository) {
        this.historyRepository = historyRepository;
    }

    // Get all saved conversations for the sidebar
    @GetMapping
    public List<AiChatHistory> getHistory() {
        return historyRepository.findAllByOrderByCreatedAtDesc();
    }

    // Open one conversation and retrieve all its messages
    @GetMapping("/{conversationId}")
    public List<AiChatHistory> getConversation(
            @PathVariable String conversationId) {

        return historyRepository
                .findByConversationIdOrderByCreatedAtAsc(conversationId);
    }
}
