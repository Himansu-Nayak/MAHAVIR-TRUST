package org.mahavirtrust.backend.controller;

import jakarta.validation.Valid;
import org.mahavirtrust.backend.dto.CreateInquiryRequest;
import org.mahavirtrust.backend.dto.CreateVolunteerRequest;
import org.mahavirtrust.backend.dto.SubmissionResponse;
import org.mahavirtrust.backend.service.PublicInquiryService;
import org.mahavirtrust.backend.service.VolunteerRegistrationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/public")
public class PublicSubmissionController {

    private final PublicInquiryService inquiryService;
    private final VolunteerRegistrationService volunteerService;

    public PublicSubmissionController(PublicInquiryService inquiryService,
                                      VolunteerRegistrationService volunteerService) {
        this.inquiryService = inquiryService;
        this.volunteerService = volunteerService;
    }

    @PostMapping("/inquiries")
    public ResponseEntity<SubmissionResponse> submitInquiry(
            @Valid @RequestBody CreateInquiryRequest request) {
        SubmissionResponse response = inquiryService.createInquiry(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @PostMapping("/volunteers")
    public ResponseEntity<SubmissionResponse> submitVolunteer(
            @Valid @RequestBody CreateVolunteerRequest request) {
        SubmissionResponse response = volunteerService.registerVolunteer(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}
