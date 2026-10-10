package org.mahavirtrust.backend.dto;

import java.time.Instant;

public record SubmissionResponse(
        String status,
        Long referenceId,
        String message,
        Instant timestamp
) {}
