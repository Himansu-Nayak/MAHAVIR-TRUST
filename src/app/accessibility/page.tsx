import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Accessibility Statement — MAHAVIR TRUST",
  description:
    "Commitment to digital accessibility, assistive technology support, and equitable access for all users of the MAHAVIR TRUST portal.",
};

export default function AccessibilityPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="Inclusion & Access"
        title="Digital Accessibility Statement"
        description="Ensuring equal access to educational resources, scholarship guidelines, and institutional communications for all users, including persons with disabilities."
        breadcrumbs={[{ label: "Accessibility Statement" }]}
      />

      <section className="py-16 md:py-24 bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8 text-xs sm:text-sm text-[#4A5568] leading-relaxed">
          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0B3B24]">
              1. Our Commitment to Universal Access
            </h2>
            <p>
              MAHAVIR TRUST believes that digital access is an essential prerequisite for educational equity. We are dedicated to ensuring that our public website conforms with standard web accessibility conventions (WCAG 2.1 Level AA) and provides a dignified experience for all users regardless of ability or device.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0B3B24]">
              2. Core Accessibility Features Implemented
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Keyboard Navigation:</strong> All interactive elements, dropdown menus, buttons, and form inputs are navigable using standard keyboard tabs with visible focus rings.
              </li>
              <li>
                <strong>High Contrast & Legibility:</strong> Color palettes (Forest Green `#072617`, Ivory `#FDFBF7`, and Gold `#C5A059`) are calibrated to exceed recommended contrast ratios for text readability.
              </li>
              <li>
                <strong>Reduced Motion Support:</strong> The interface respects user operating system preferences for reduced motion (`prefers-reduced-motion: reduce`), eliminating vestibular distractions.
              </li>
              <li>
                <strong>Semantic HTML Architecture:</strong> Proper landmark elements (header, nav, main, section, footer) and explicit form labels ensure seamless compatibility with screen readers.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0B3B24]">
              3. Continuous Review & Feedback
            </h2>
            <p>
              We continuously test our portal across modern browsers and assistive technologies. If you encounter any barriers or have suggestions for improving accessibility, please contact our administrative desk at <strong>contact@mahavirtrust.org</strong> with the subject line <code>[ACCESSIBILITY_FEEDBACK]</code>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
