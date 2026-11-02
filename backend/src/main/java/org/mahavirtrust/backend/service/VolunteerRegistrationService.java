package org.mahavirtrust.backend.service;

import org.mahavirtrust.backend.dto.CreateVolunteerRequest;
import org.mahavirtrust.backend.dto.SubmissionResponse;
import org.mahavirtrust.backend.entity.VolunteerRegistration;
import org.mahavirtrust.backend.repository.VolunteerRegistrationRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Duration;
import java.time.Instant;
import java.time.ZoneId;
import java.util.List;

@Service
public class VolunteerRegistrationService {

    private static final Logger log = LoggerFactory.getLogger(VolunteerRegistrationService.class);

    private final VolunteerRegistrationRepository repository;

    public VolunteerRegistrationService(VolunteerRegistrationRepository repository) {
        this.repository = repository;
    }

    @Transactional
    public SubmissionResponse registerVolunteer(CreateVolunteerRequest request) {
        String cleanEmail = request.email().trim().toLowerCase();
        String cleanRole = sanitizeInput(request.roleInterest().trim());

        // Duplicate submission check
        List<VolunteerRegistration> recent = repository.findByEmailOrderByIdDesc(cleanEmail);
        if (!recent.isEmpty()) {
            VolunteerRegistration latest = recent.get(0);
            long rawSeconds = latest.getCreatedAt() != null
                    ? Math.abs(Duration.between(latest.getCreatedAt(), Instant.now()).toSeconds())
                    : 0;

            int tzOffsetSeconds = ZoneId.systemDefault().getRules().getOffset(Instant.now()).getTotalSeconds();
            long normalizedSeconds = Math.min(rawSeconds, Math.abs(rawSeconds - tzOffsetSeconds));

            if (latest.getRoleInterest().equalsIgnoreCase(cleanRole) && normalizedSeconds < 180) {
                log.warn("Duplicate volunteer registration detected for email: {}. Returning existing ref.", cleanEmail);
                return new SubmissionResponse(
                        "SUCCESS",
                        latest.getId(),
                        "Your volunteer registration is already recorded under reference #" + latest.getId() + ".",
                        latest.getCreatedAt()
                );
            }
        }

        log.info("Received volunteer registration for role: {}", cleanRole);

        boolean consent = Boolean.TRUE.equals(request.consentDeclared());
        String consentVersion = request.consentVersion() != null && !request.consentVersion().isBlank()
                ? sanitizeInput(request.consentVersion().trim())
                : "v1.0-2026";
        String consentStatement = "I agree to the MAHAVIR TRUST volunteer code of conduct, student safeguarding policy, and ethical mentorship guidelines.";
        Instant consentTimestamp = consent ? Instant.now() : null;

        VolunteerRegistration registration = new VolunteerRegistration(
                sanitizeInput(request.fullName().trim()),
                cleanEmail,
                sanitizeInput(request.phone().trim()),
                cleanRole,
                request.district() != null ? sanitizeInput(request.district().trim()) : null,
                request.availability() != null ? sanitizeInput(request.availability().trim()) : null,
                request.qualification() != null ? sanitizeInput(request.qualification().trim()) : null,
                request.engagementMode() != null ? sanitizeInput(request.engagementMode().trim()) : null,
                request.backgroundNotes() != null ? sanitizeInput(request.backgroundNotes().trim()) : null,
                consent,
                consentStatement,
                consentVersion,
                consentTimestamp
        );

        VolunteerRegistration saved = repository.save(registration);
        log.info("Successfully registered volunteer with referenceId: {}", saved.getId());

        return new SubmissionResponse(
                "SUCCESS",
                saved.getId(),
                "Your volunteer registration has been logged for orientation review.",
                Instant.now()
        );
    }

    private String sanitizeInput(String input) {
        if (input == null) return null;
        return input.replaceAll("(?i)<script.*?>.*?</script>", "")
                    .replaceAll("<[^>]*>", "");
    }
}
