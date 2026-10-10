-- V1__initial_schema.sql
-- MAHAVIR TRUST - Baseline Schema Migration
-- Note: Manages auditable contact inquiries and volunteer expressions without collecting sensitive applicant data.

CREATE TABLE IF NOT EXISTS public_inquiries (
    id BIGSERIAL PRIMARY KEY,
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(30) NOT NULL,
    category VARCHAR(50) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(30) NOT NULL DEFAULT 'PENDING_REVIEW',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_inquiries_email ON public_inquiries(email);
CREATE INDEX IF NOT EXISTS idx_inquiries_category ON public_inquiries(category);
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON public_inquiries(created_at);

CREATE TABLE IF NOT EXISTS volunteer_registrations (
    id BIGSERIAL PRIMARY KEY,
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(30) NOT NULL,
    role_interest VARCHAR(50) NOT NULL,
    background_notes TEXT,
    verification_status VARCHAR(30) NOT NULL DEFAULT 'AWAITING_ORIENTATION',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_volunteers_email ON volunteer_registrations(email);
CREATE INDEX IF NOT EXISTS idx_volunteers_role ON volunteer_registrations(role_interest);
