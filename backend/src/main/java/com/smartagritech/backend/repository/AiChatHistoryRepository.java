
package com.smartagritech.backend.repository;

import com.smartagritech.backend.model.AiChatHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface AiChatHistoryRepository
        extends JpaRepository<AiChatHistory, Long> {

    List<AiChatHistory> findAllByOrderByCreatedAtDesc();

    List<AiChatHistory> findByConversationIdOrderByCreatedAtAsc(String conversationId);

}
