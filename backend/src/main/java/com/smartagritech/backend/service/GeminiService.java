
package com.smartagritech.backend.service;

import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;
import org.springframework.stereotype.Service;

@Service
public class GeminiService {

    private final Client client;

    public GeminiService() {
        String apiKey = System.getenv("GEMINI_API_KEY");

        if (apiKey == null || apiKey.isBlank()) {
            throw new IllegalStateException(
                "GEMINI_API_KEY environment variable is not set."
            );
        }

        this.client = Client.builder()
                .apiKey(apiKey)
                .build();
    }

    public String askGemini(String question, String language) {

       
String prompt = """
    You are SmartAgriTech, a helpful farming assistant
    for Indian farmers.

    Answer in the language requested by the farmer.
    Requested language: %s

    Give clear, simple, practical answers.
    Keep answers concise, around 3–6 short sentences.
    Give the most useful advice first.
    Avoid unnecessary introductions.
    Ask follow-up questions if important information is missing.
    Do not claim certainty when the cause is unclear.
    Avoid unsafe pesticide or medicine recommendations.
    For personal problems, respond with empathy and practical
    suggestions. Recommend appropriate professional help
    when necessary.

    Farmer's question:
    %s
    """.formatted(language, question);


        GenerateContentResponse response =
                client.models.generateContent(
                        "gemini-3.8-flash",
                        prompt,
                        null
                );

        String answer = response.text();

        if (answer == null || answer.isBlank()) {
            return "Sorry, I could not generate an answer. Please try again.";
        }

        return answer;
    }
}
