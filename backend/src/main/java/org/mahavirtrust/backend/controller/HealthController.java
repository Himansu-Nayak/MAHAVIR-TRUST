package org.mahavirtrust.backend.controller;

import org.mahavirtrust.backend.dto.HealthResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.util.Map;

@RestController
@RequestMapping
public class HealthController {

    @Value("${spring.application.name:mahavir-trust-backend}")
    private String applicationName;

    @GetMapping("/health")
    public ResponseEntity<HealthResponse> getHealth() {
        HealthResponse response = new HealthResponse(
                "UP",
                applicationName,
                "0.1.0",
                Instant.now(),
                Map.of(
                        "system", "MAHAVIR TRUST Institutional API",
                        "status", "Operational"
                )
        );
        return ResponseEntity.ok(response);
    }
}
