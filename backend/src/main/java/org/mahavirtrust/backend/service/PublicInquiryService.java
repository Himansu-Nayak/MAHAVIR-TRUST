package org.mahavirtrust.backend.service;

import org.mahavirtrust.backend.dto.CreateInquiryRequest;
import org.mahavirtrust.backend.dto.SubmissionResponse;
import org.mahavirtrust.backend.entity.PublicInquiry;
import org.mahavirtrust.backend.repository.PublicInquiryRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;

@Service
public class PublicInquiryService {

    private static final Logger log = LoggerFactory.getLogger(PublicInquiryService.class);

    private final PublicInquiryRepository repository;

    public PublicInquiryService(PublicInquiryRepository repository) {
        this.repository = repository;
    }

    @Transactional
    public SubmissionResponse createInquiry(CreateInquiryRequest request) {
        log.info("Received public inquiry under category: {}", request.category());

        PublicInquiry inquiry = new PublicInquiry(
                request.fullName().trim(),
                request.email().trim().toLowerCase(),
                request.phone().trim(),
                request.category().trim(),
                request.message().trim()
        );

        PublicInquiry saved = repository.save(inquiry);
        log.info("Successfully recorded inquiry with referenceId: {}", saved.getId());

        return new SubmissionResponse(
                "SUCCESS",
                saved.getId(),
                "Your inquiry has been successfully received by the MAHAVIR TRUST Secretariat.",
                Instant.now()
        );
    }
}
