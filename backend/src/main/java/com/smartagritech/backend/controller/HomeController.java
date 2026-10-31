
package com.smartagritech.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "SmartAgriTech Backend is running successfully!";
    }

    @GetMapping("/health")
    public String health() {
        return "SmartAgriTech is healthy!";
    }
}
