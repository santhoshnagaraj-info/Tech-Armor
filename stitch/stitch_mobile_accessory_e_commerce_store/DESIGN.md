---
name: High-Tech Nexus
colors:
  surface: '#041426'
  surface-dim: '#041426'
  surface-bright: '#2b3a4d'
  surface-container-lowest: '#010f20'
  surface-container-low: '#0d1c2e'
  surface-container: '#112032'
  surface-container-high: '#1c2b3d'
  surface-container-highest: '#273649'
  on-surface: '#d4e4fc'
  on-surface-variant: '#bac9cc'
  inverse-surface: '#d4e4fc'
  inverse-on-surface: '#223144'
  outline: '#849396'
  outline-variant: '#3b494c'
  surface-tint: '#00daf3'
  primary: '#c3f5ff'
  on-primary: '#00363d'
  primary-container: '#00e5ff'
  on-primary-container: '#00626e'
  inverse-primary: '#006875'
  secondary: '#bdc7dc'
  on-secondary: '#273141'
  secondary-container: '#3d4759'
  on-secondary-container: '#abb5cb'
  tertiary: '#e7ecfd'
  on-tertiary: '#2a303d'
  tertiary-container: '#cbd0e1'
  on-tertiary-container: '#535967'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#9cf0ff'
  primary-fixed-dim: '#00daf3'
  on-primary-fixed: '#001f24'
  on-primary-fixed-variant: '#004f58'
  secondary-fixed: '#d9e3f9'
  secondary-fixed-dim: '#bdc7dc'
  on-secondary-fixed: '#121c2c'
  on-secondary-fixed-variant: '#3d4759'
  tertiary-fixed: '#dde2f3'
  tertiary-fixed-dim: '#c1c6d7'
  on-tertiary-fixed: '#161c27'
  on-tertiary-fixed-variant: '#414754'
  background: '#041426'
  on-background: '#d4e4fc'
  surface-variant: '#273649'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The brand personality of the design system is engineered, precise, and premium. It targets tech enthusiasts and professionals who value performance and protection for their hardware. The UI evokes a sense of "digital craftsmanship" through a high-tech aesthetic that balances utility with a sophisticated edge.

The design style is **Corporate / Modern** with a slight lean toward **Minimalism**. It utilizes deep tonal layering to create a focused shopping environment where the vibrant electric blue acts as a surgical tool for navigation and conversion. The interface remains quiet, allowing product photography—typically featuring high-gloss plastics, brushed metals, and glass—to remain the focal point.

## Colors

The design system utilizes a dark-mode-first approach to emphasize the "high-tech" nature of the mobile hardware category. 

- **Primary (Electric Blue):** A high-vibrancy accent reserved for primary actions, progress indicators, and active states. It should feel like it is glowing against the darker backgrounds.
- **Secondary (Slate Gray):** Used for component surfaces like cards, input fields, and secondary buttons.
- **Tertiary (Deep Charcoal):** The foundation of the UI, used for page backgrounds and deep layering.
- **Neutral:** A range of grays used for secondary text, borders, and inactive icons to maintain a sophisticated hierarchy.

## Typography

This design system uses a dual-font strategy to balance technical character with readability. **Space Grotesk** is utilized for headlines to provide a futuristic, geometric feel that aligns with high-tech engineering. **Inter** is used for all body copy, labels, and UI elements to ensure maximum legibility at smaller scales and a professional, systematic tone.

Text hierarchy is strictly enforced through weight and color. Headlines use the Primary Blue or high-contrast White, while body text uses varying shades of Slate and Neutral grays to manage cognitive load.

## Layout & Spacing

The design system employs a **Fixed Grid** model for desktop environments and a **Fluid Grid** for mobile devices. The layout is based on a 12-column system on desktop and a 4-column system on mobile.

A strict 8px spatial rhythm governs all padding and margins, ensuring a mathematical rigor consistent with technical hardware. Components are grouped using "stacks" (vertical spacing) to clearly define relationships between product specs, pricing, and descriptions. Large areas of "empty" charcoal space are encouraged to create a premium, un-cluttered feel.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Ambient Shadows**. Surfaces closer to the user are rendered in lighter shades of Slate Gray, while the background remains the Deep Charcoal.

Shadows are used sparingly and are "long and soft," utilizing a 20% opacity black with a wide blur radius to simulate a gentle float rather than a harsh lift. This subtle depth helps product cards stand out from the base background without breaking the minimalist aesthetic. A 1px low-contrast outline (Slate Gray) is applied to all cards to provide crisp definition in low-light interface modes.

## Shapes

The design system uses a **Rounded** shape language to soften the high-tech aesthetic and make the digital experience feel ergonomic. 

Standard components (buttons, input fields) utilize a 0.5rem (8px) corner radius. Larger containers, such as product detail cards and promotional banners, use the `rounded-lg` (16px) or `rounded-xl` (24px) tokens to create a modern, "encapsulated" look. This geometry mirrors the rounded corners of modern smartphones and protective cases.

## Components

- **Buttons:** Primary buttons are solid Electric Blue with bold white Inter labels. Secondary buttons use a Slate Gray ghost-style with a subtle border. Hover states should include a soft outer glow in Electric Blue.
- **Cards:** Product cards use the Tertiary color as a base with a 1px Slate border. On hover, the border transitions to Electric Blue. Product images should be center-aligned with no background.
- **Input Fields:** Dark surfaces with Slate borders. The active state is signaled by an Electric Blue bottom-border and a subtle blue inner glow.
- **Icons:** Use thin, 1.5pt stroke "Outline" style icons. Icons should be monochrome neutral gray, turning Electric Blue only when active or hovered.
- **Chips:** Small, rounded-pill containers for technical specs (e.g., "MagSafe," "USB-C"). These use a semi-transparent Slate background with tiny label-sm text.
- **Progress Steppers:** Thin Electric Blue lines used in checkout to maintain the minimalist, high-tech flow.