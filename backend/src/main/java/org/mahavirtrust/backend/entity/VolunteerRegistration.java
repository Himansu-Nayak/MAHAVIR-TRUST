package org.mahavirtrust.backend.entity;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "volunteer_registrations")
public class VolunteerRegistration {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "full_name", nullable = false, length = 150)
    private String fullName;

    @Column(nullable = false, length = 255)
    private String email;

    @Column(nullable = false, length = 30)
    private String phone;

    @Column(name = "role_interest", nullable = false, length = 50)
    private String roleInterest;

    @Column(name = "background_notes", columnDefinition = "TEXT")
    private String backgroundNotes;

    @Column(name = "verification_status", nullable = false, length = 30)
    private String verificationStatus = "AWAITING_ORIENTATION";

    @Column(name = "created_at", nullable = false, updatable = false)
    private Instant createdAt = Instant.now();

    public VolunteerRegistration() {}

    public VolunteerRegistration(String fullName, String email, String phone, String roleInterest, String backgroundNotes) {
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.roleInterest = roleInterest;
        this.backgroundNotes = backgroundNotes;
        this.verificationStatus = "AWAITING_ORIENTATION";
        this.createdAt = Instant.now();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getRoleInterest() {
        return roleInterest;
    }

    public void setRoleInterest(String roleInterest) {
        this.roleInterest = roleInterest;
    }

    public String getBackgroundNotes() {
        return backgroundNotes;
    }

    public void setBackgroundNotes(String backgroundNotes) {
        this.backgroundNotes = backgroundNotes;
    }

    public String getVerificationStatus() {
        return verificationStatus;
    }

    public void setVerificationStatus(String verificationStatus) {
        this.verificationStatus = verificationStatus;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }
}
