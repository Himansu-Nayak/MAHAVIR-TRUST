package org.mahavirtrust.backend.service;

import org.mahavirtrust.backend.dto.CreateVolunteerRequest;
import org.mahavirtrust.backend.dto.SubmissionResponse;
import org.mahavirtrust.backend.entity.VolunteerRegistration;
import org.mahavirtrust.backend.repository.VolunteerRegistrationRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;

@Service
public class VolunteerRegistrationService {

    private static final Logger log = LoggerFactory.getLogger(VolunteerRegistrationService.class);

    private final VolunteerRegistrationRepository repository;

    public VolunteerRegistrationService(VolunteerRegistrationRepository repository) {
        this.repository = repository;
    }

    @Transactional
    public SubmissionResponse registerVolunteer(CreateVolunteerRequest request) {
        log.info("Received volunteer registration for role: {}", request.roleInterest());

        VolunteerRegistration registration = new VolunteerRegistration(
                request.fullName().trim(),
                request.email().trim().toLowerCase(),
                request.phone().trim(),
                request.roleInterest().trim(),
                request.backgroundNotes() != null ? request.backgroundNotes().trim() : null
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
}
