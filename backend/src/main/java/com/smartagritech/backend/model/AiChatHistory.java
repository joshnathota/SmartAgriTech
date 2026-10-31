
package com.smartagritech.backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "ai_chat_history")
public class AiChatHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 36)
    private String conversationId;


    @Column(nullable = false, length = 5000)
    private String question;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String answer;

    @Column(nullable = false, length = 50)
    private String language;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    public AiChatHistory() {
    }

    public AiChatHistory(String question, String answer,
                        String language, String conversationId) {
        this.question = question;
        this.answer = answer;
        this.language = language;
        this.conversationId = conversationId;               
        this.createdAt = LocalDateTime.now();
    }

    public Long getId() {
        return id;
    }

    public String getConversationId() {
    return conversationId;
}

    public String getQuestion() {
        return question;
    }

    public String getAnswer() {
        return answer;
    }

    public String getLanguage() {
        return language;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
}
