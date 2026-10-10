package org.mahavirtrust.backend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CreateVolunteerRequest(
        @NotBlank(message = "Full name is required")
        @Size(max = 150, message = "Full name must not exceed 150 characters")
        String fullName,

        @NotBlank(message = "Email is required")
        @Email(message = "Email must be a valid email address")
        @Size(max = 255, message = "Email must not exceed 255 characters")
        String email,

        @NotBlank(message = "Phone number is required")
        @Size(max = 30, message = "Phone must not exceed 30 characters")
        String phone,

        @NotBlank(message = "Role of interest is required")
        @Size(max = 50, message = "Role interest must not exceed 50 characters")
        String roleInterest,

        @Size(max = 2000, message = "Background notes must not exceed 2000 characters")
        String backgroundNotes
) {}
