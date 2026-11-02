# MAHAVIR TRUST — Institutional Design System Specification

**Document Reference**: `DESIGN_SYSTEM_SPECIFICATION.md`  
**Author**: Principal Product Designer & Senior Frontend Architect  
**Target Environment**: Isolated Security Worktree (`.worktrees/security-patch`)  
**Git Branch**: `security/nextjs-patch-upgrade`  
**Date**: November 2, 2026  
**Version**: 2.0.0-ENTERPRISE  
**Accessibility Target**: WCAG 2.2 Level AA Compliance  

---

## 1. Design Philosophy: Institutional Prestige & Empathetic Storytelling

The MAHAVIR TRUST design system merges the dignified authority of classical university endowments (such as [RCM](https://rcm.ac.in/)) with the warm empathy and transparency of modern philanthropic foundations (such as [Smile Foundation India](https://www.smilefoundationindia.org/)). 

### Core Tenets:
1. **Academic Dignity**: Scholarly serif headings, balanced letter-spacing, deep forest greens, and warm ivory paper textures reflect heritage and permanence.
2. **Gold Accents with High Contrast**: Gold is used selectively as an accent of excellence and warmth—never in low-contrast text applications that violate accessibility standards.
3. **Structured Clarity**: Information is presented in organized, bite-sized hierarchical tiers (Badges -> Headings -> Subtext -> Key Metrics -> Primary Actions).
4. **Tactile Interaction**: Every interactive control possesses intentional states (Rest, Hover, Focus-Visible, Active, Disabled, Loading) with smooth CSS transitions and accessible focus rings.

---

## 2. Color Palette & Semantic Tokens

### 2.1 The Core Triad
The brand identity is rooted in three foundational colors:

```
+-------------------------------------------------------------------------------------------------------+
| Color Name              | Hex Code  | RGB Equivalent      | Purpose & Application                    |
+-------------------------------------------------------------------------------------------------------+
| Forest Green (Darkest)  | #072617   | rgb(7, 38, 23)      | Hero backgrounds, footers, dark cards    |
| Forest Green (Primary)  | #0B3B24   | rgb(11, 59, 36)     | Primary brand color, dark headings, CTAs |
| Forest Green (Accent)   | #165B38   | rgb(22, 91, 56)     | Ambient glow, hover states, badges       |
| Gold (Heritage)         | #C5A059   | rgb(197, 160, 89)   | Accents, borders, badges, button icons   |
| Gold (Champagne)        | #E4C88A   | rgb(228, 200, 138)  | Text on dark green, icons, highlights    |
| Gold (High-Contrast)    | #7A5E24   | rgb(122, 94, 36)    | Text & labels on light/ivory backgrounds |
| Warm Ivory (Base)       | #FDFBF7   | rgb(253, 251, 247)  | Page background, elevated card surfaces  |
| Warm Surface (Warm)     | #F4EFE6   | rgb(244, 239, 230)  | Alternating section backgrounds, inputs  |
| Sand Accent             | #EDE6D8   | rgb(237, 230, 216)  | Subtle dividing lines, table headers     |
| Charcoal Text           | #1C2421   | rgb(28, 36, 33)     | High-contrast body text, primary copy    |
| Slate Text              | #4A5568   | rgb(74, 85, 104)    | Secondary descriptions, metadata subtext |
+-------------------------------------------------------------------------------------------------------+
```

### 2.2 Contrast Compliance Matrix (WCAG 2.2 AA)

| Foreground Color | Background Color | Contrast Ratio | Minimum AA Requirement | Compliance Status |
| :--- | :--- | :--- | :--- | :--- |
| `#FFFFFF` (White) | `#072617` (Dark Forest) | **15.8 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| `#E4C88A` (Champagne) | `#072617` (Dark Forest) | **9.4 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| `#E4C88A` (Champagne) | `#0B3B24` (Primary Forest) | **7.1 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| `#1C2421` (Charcoal) | `#FDFBF7` (Ivory Base) | **14.2 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| `#4A5568` (Slate Text) | `#FDFBF7` (Ivory Base) | **6.4 : 1** | 4.5 : 1 (Normal Text) | **PASS (AA)** |
| `#7A5E24` (Contrast Gold) | `#FDFBF7` (Ivory Base) | **4.9 : 1** | 4.5 : 1 (Normal Text) | **PASS (AA)** |
| `#0B3B24` (Forest Text) | `#FDFBF7` (Ivory Base) | **10.6 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |

---

## 3. Typography System

### 3.1 Font Families
- **Display & Headings (Serif)**:
  `font-serif: "Playfair Display", "Baskerville", "Georgia", "Cambria", "Times New Roman", serif`
  - Evokes classical institutional heritage, scholarship, and legal gravitas.
- **Body & Interface (Sans-Serif)**:
  `font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
  - High legibility, crisp rendering on low-DPI mobile screens, and full character support.
- **Monospace & Numerical (Code & Registry Numbers)**:
  `font-mono: "JetBrains Mono", "SF Mono", Menlo, Consolas, monospace`
  - Used for application reference numbers (e.g., `#AppRef-2026-1049`), timestamps, and statutory registration numbers.

### 3.2 Type Scale (Fluid Desktop & Mobile)

```
Level       Mobile (360px)       Desktop (1440px)     Weight       Line Height   Letter Spacing
Display     36px (2.25rem)       56px (3.5rem)        700 Bold     1.15          -0.025em (tight)
Heading 1   30px (1.875rem)      44px (2.75rem)       700 Bold     1.20          -0.02em (tight)
Heading 2   24px (1.5rem)        32px (2.0rem)        700 Bold     1.25          -0.015em
Heading 3   20px (1.25rem)       24px (1.5rem)        600 SemiBold 1.30          -0.01em
Heading 4   17px (1.0625rem)     19px (1.1875rem)     600 SemiBold 1.35          0.00em
Body Large  16px (1.0rem)        18px (1.125rem)      400 Regular  1.60          0.00em
Body Normal 14px (0.875rem)      15px (0.9375rem)     400 Regular  1.60          0.00em
Body Small  12px (0.75rem)       13px (0.8125rem)     400 Regular  1.50          0.01em
Caption     10px (0.625rem)      11px (0.6875rem)     600 SemiBold 1.40          0.05em (wide/uppercase)
```

---

## 4. Spacing Scale & Grid System

Based on an **8-point spatial grid** (with a 4-point sub-grid for fine micro-alignments):

```
Token      Value (px)   Tailwind Class   Usage
space-1    4px          gap-1 / p-1      Micro padding, icon offsets
space-2    8px          gap-2 / p-2      Compact badge padding, form field gap
space-3    12px         gap-3 / p-3      Input vertical padding, card micro-spacing
space-4    16px         gap-4 / p-4      Standard button padding, compact card body
space-6    24px         gap-6 / p-6      Standard card padding, grid gutters
space-8    32px         gap-8 / p-8      Generous card padding, section sub-elements
space-12   48px         gap-12 / p-12    Section margin, multi-column row gap
space-16   64px         py-16            Standard section vertical padding
space-24   96px         py-24            Hero & landmark section vertical padding
```

### 4.1 Responsive Containers
- **Container Max Width**: `max-w-7xl` (1280px) centered via `mx-auto`.
- **Lateral Gutters**:
  - Mobile (360px - 639px): `px-4` (16px)
  - Tablet (640px - 1023px): `px-6` (24px)
  - Desktop (1024px+): `px-8` (32px)

---

## 5. Component Primitives & Styling Standards

### 5.1 Buttons (`Button.tsx`)
```tsx
// Variants:
// 1. primary:   bg-[#0B3B24] text-white hover:bg-[#072617] border border-[#0B3B24] shadow-xs active:scale-[0.99]
// 2. secondary: bg-[#F4EFE6] text-[#072617] hover:bg-[#EDE6D8] border border-[#0B3B24]/15
// 3. gold:      bg-[#C5A059] text-[#072617] hover:bg-[#B38D44] font-semibold border border-[#B38D44]/30 shadow-xs
// 4. outline:   border border-[#0B3B24] text-[#0B3B24] hover:bg-[#0B3B24] hover:text-white
// 5. ghost:     text-[#072617] hover:bg-[#0B3B24]/5
// 6. dark-outline: border border-white/30 text-white hover:bg-white/10
```
- **Focus Ring**: `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059]`.
- **States**: Includes built-in `isLoading` state replacing left icon with an animated spinning SVG (`Loader2`).

### 5.2 Cards (`Card.tsx`)
- **`default`**: `bg-[#FDFBF7] border border-[#0B3B24]/12 rounded-sm shadow-xs hover:border-[#0B3B24]/25 transition-all`
- **`elevated`**: `bg-white border border-[#0B3B24]/10 rounded-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300`
- **`accent`**: `bg-[#F4EFE6] border-l-4 border-l-[#C5A059] border-y border-r border-[#0B3B24]/10 rounded-r-sm`
- **`dark`**: `bg-[#072617] text-[#EDE6D8] border border-[#C5A059]/25 rounded-sm shadow-lg`

### 5.3 Badges (`Badge.tsx`)
- Pill-shaped or subtle rounded tags with micro-typography:
  - **`gold`**: `bg-[#C5A059]/15 text-[#7A5E24] border border-[#C5A059]/30` (Accessible on light surfaces)
  - **`gold-dark`**: `bg-[#C5A059]/20 text-[#E4C88A] border border-[#C5A059]/40` (Accessible on dark surfaces)
  - **`forest`**: `bg-[#0B3B24]/10 text-[#0B3B24] border border-[#0B3B24]/20`
  - **`success`**: `bg-emerald-50 text-emerald-800 border border-emerald-200`

### 5.4 Form Elements
- Standardized heights: 42px for single-line inputs.
- Background: `#FDFBF7` with border `#0B3B24]/20`.
- Focus State: Smooth transition to border `#C5A059` with subtle box-shadow ring `ring-2 ring-[#C5A059]/20`.
- Error State: Border `border-red-500` with text `text-red-700` and `role="alert"`.

### 5.5 Elevation & Shadows
- **`shadow-xs`**: `0 1px 2px 0 rgba(7, 38, 23, 0.05)` (subtle cards, buttons)
- **`shadow-sm`**: `0 2px 4px 0 rgba(7, 38, 23, 0.08)` (dropdown menus, floating docks)
- **`shadow-md`**: `0 4px 12px -2px rgba(7, 38, 23, 0.12)` (elevated cards on hover, popovers)
- **`shadow-2xl`**: `0 25px 50px -12px rgba(7, 38, 23, 0.25)` (modals, hero quick cards)

---

## 6. Motion & Micro-Interactions Standards

1. **Duration Tokens**:
   - `fast`: `150ms` (buttons, checkboxes, tooltips)
   - `medium`: `250ms` (dropdowns, card hover lifts, tabs)
   - `deliberate`: `400ms` (modal open/close, drawer sliding, accordion expansion)
2. **Timing Curves**:
   - Standard: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo for crisp, responsive physical feel)
3. **Reduced Motion Overrides**:
   - Every CSS animation and continuous marquee is guarded by:
     ```css
     @media (prefers-reduced-motion: reduce) {
       *, ::before, ::after {
         animation-duration: 0.01ms !important;
         animation-iteration-count: 1 !important;
         transition-duration: 0.01ms !important;
       }
     }
     ```

---

## 7. Component Library Primitives (Section 1 Deliverable)

All core components are exported from `src/components/ui/index.ts`:

```
src/components/ui/
├── Button.tsx          - 6 variants, 3 sizes, loading state, accessible focus rings
├── Badge.tsx           - Standalone primitive (gold, gold-dark, contrast-gold, forest, forest-dark, neutral, success, warning, outline)
├── Card.tsx            - Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter (with Badge re-export)
├── Container.tsx       - Standardized responsive layout wrapper (default, narrow, prose, wide, full)
├── SectionHeader.tsx   - Editorial section introduction with badge, title, subtitle, and action slots
├── Input.tsx           - Accessible form input with label, error, helper text, and icon slots
├── Textarea.tsx        - Accessible multi-line input with label, error, helper, and character counter
├── Select.tsx          - Accessible form dropdown select with custom chevron and ARIA state bindings
└── StateFeedback.tsx   - Universal feedback primitive for loading, error, empty, and success states
```
