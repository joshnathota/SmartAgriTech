
package com.smartagritech.backend.controller;

import com.smartagritech.backend.model.AiChatHistory;
import com.smartagritech.backend.repository.AiChatHistoryRepository;
import com.smartagritech.backend.service.GeminiService;

import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/ai")
@CrossOrigin(origins = "*")
public class GeminiController {

    private final GeminiService geminiService;
    private final AiChatHistoryRepository historyRepository;

    public GeminiController(
            GeminiService geminiService,
            AiChatHistoryRepository historyRepository) {
        this.geminiService = geminiService;
        this.historyRepository = historyRepository;
    }

    @PostMapping("/ask")
    public Map<String, String> askQuestion(
            @RequestBody Map<String, String> request) {

        try {
            String question = request.get("question");
            String language = request.get("language");
            String conversationId = request.get("conversationId");

            if (question == null || question.isBlank()) {
                return Map.of(
                    "answer", "Please enter your farming question."
                );
            }

            if (language == null || language.isBlank()) {
                language = "English";
            }

            if (conversationId == null || conversationId.isBlank()) {
                conversationId = UUID.randomUUID().toString();
            }

            String answer = geminiService.askGemini(question, language);

            AiChatHistory history = new AiChatHistory(
                question, answer, language, conversationId
            );

            historyRepository.save(history);

            return Map.of(
                "answer", answer,
                "conversationId", conversationId
            );

        } catch (Exception e) {
            e.printStackTrace();

            return Map.of(
                "answer",
                "AI error: " + e.getClass().getSimpleName()
                    + ": " + String.valueOf(e.getMessage())
            );
        }
    }
}
