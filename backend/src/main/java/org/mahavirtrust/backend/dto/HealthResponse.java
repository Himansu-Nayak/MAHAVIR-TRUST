package org.mahavirtrust.backend.dto;

import java.time.Instant;
import java.util.Map;

public record HealthResponse(
    String status,
    String application,
    String version,
    Instant timestamp,
    Map<String, String> details
) {}
