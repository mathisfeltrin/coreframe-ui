# CoreFrameUI Design System

A modern, Apple-inspired design system built with Tailwind CSS v4.

## Philosophy

Our design system is inspired by Apple's design principles:
- **Clarity**: Clean and simple interfaces
- **Consistency**: Unified experience across components
- **Depth**: Thoughtful use of shadows and layering
- **Elegance**: Refined and sophisticated aesthetics

## Colors

### Brand Colors

Our primary brand color is extracted from the CoreFrame logo - a modern cyan-blue that conveys trust, innovation, and technology.

```css
brand-500: #0ea5e9  /* Main brand color */
brand-600: #0284c7  /* Primary button background */
brand-700: #0369a1  /* Hover states */
```

**Usage:**
- Primary actions (buttons, links, highlights)
- Brand accents and emphasis
- Interactive elements

### Neutral Colors

Apple-style sophisticated grays for text, backgrounds, and UI elements.

```css
neutral-50: #fafafa   /* Lightest background */
neutral-100: #f5f5f5  /* Light backgrounds */
neutral-700: #404040  /* Secondary buttons */
neutral-900: #171717  /* Primary text */
```

**Usage:**
- Text hierarchy
- Backgrounds and surfaces
- Borders and dividers
- Secondary actions

### Semantic Colors

**Success** (Green): Confirmations, success states
```css
success-500: #22c55e
success-600: #16a34a
```

**Error** (Red): Errors, destructive actions
```css
error-500: #ef4444
error-600: #dc2626
```

**Warning** (Amber): Warnings, caution states
```css
warning-500: #f59e0b
warning-600: #d97706
```

**Info** (Blue): Informational messages
```css
info-500: #3b82f6
info-600: #2563eb
```

## Typography

### Font Sizes

Following Apple's hierarchy with generous sizing for readability:

| Size | Value | Use Case |
|------|-------|----------|
| xs | 12px | Captions, labels |
| sm | 14px | Secondary text |
| base | 16px | Body text |
| lg | 18px | Emphasized text |
| xl | 20px | Small headings |
| 2xl | 24px | Subheadings |
| 3xl | 30px | Section headings |
| 4xl | 36px | Page headings |
| 5xl | 48px | Hero text |

### Font Weights

- **light** (300): Rarely used, decorative
- **normal** (400): Body text
- **medium** (500): Emphasis, labels
- **semibold** (600): Subheadings, buttons
- **bold** (700): Headings, strong emphasis

### Line Heights

- **tight** (1.25): Headings
- **snug** (1.375): Subheadings
- **normal** (1.5): Body text (default)
- **relaxed** (1.625): Long-form content
- **loose** (2): Special use cases

## Spacing

Generous spacing inspired by Apple's layouts. Using multiples of 4px:

| Token | Value | Common Use |
|-------|-------|------------|
| 1 | 4px | Tight spacing |
| 2 | 8px | Component padding |
| 3 | 12px | Small gaps |
| 4 | 16px | Standard spacing |
| 6 | 24px | Section padding |
| 8 | 32px | Large spacing |
| 12 | 48px | Section gaps |
| 16 | 64px | Layout spacing |

## Border Radius

Apple's signature smooth corners:

| Token | Value | Use Case |
|-------|-------|----------|
| sm | 4px | Small elements |
| base | 6px | Default |
| md | 8px | Cards, inputs |
| lg | 12px | Buttons, larger cards |
| xl | 16px | Modal corners |
| 2xl | 24px | Hero sections |
| full | 9999px | Pills, avatars |

## Shadows

Subtle shadows for depth without overwhelming the design:

| Shadow | Use Case |
|--------|----------|
| xs | Subtle elevation |
| sm | Buttons, small cards |
| base | Cards, dropdowns |
| md | Elevated cards |
| lg | Modals, popovers |
| xl | High-elevation elements |
| 2xl | Maximum depth |

## Transitions

Apple's signature smooth animations using ease-out curves:

| Speed | Duration | Use Case |
|-------|----------|----------|
| fast | 150ms | Micro-interactions |
| base | 200ms | Standard (default) |
| medium | 300ms | Larger transitions |
| slow | 500ms | Complex animations |

All transitions use: `cubic-bezier(0.4, 0, 0.2, 1)`

## Z-Index Scale

Predictable layering system:

```css
base: 0          /* Default layer */
dropdown: 1000   /* Dropdown menus */
sticky: 1100     /* Sticky elements */
overlay: 1200    /* Modal backdrops */
modal: 1300      /* Modal dialogs */
popover: 1400    /* Popovers */
tooltip: 1500    /* Tooltips (highest) */
```

## Component Guidelines

### Buttons

**Variants:**
- **Primary**: Brand color, main call-to-action
- **Secondary**: Neutral color, secondary actions
- **Outline**: Transparent with border, tertiary actions

**Sizes:**
- **sm**: Compact, for tight spaces
- **md**: Standard, most common
- **lg**: Emphasized, hero sections

**States:**
- Normal: Clear visual hierarchy
- Hover: Slightly darker, subtle shadow increase
- Active: Darkest, pressed appearance
- Disabled: 50% opacity, no pointer events
- Focus: Ring for keyboard navigation

**Best Practices:**
- Use primary sparingly, one per section
- Keep text concise (1-3 words)
- Ensure adequate touch targets (min 44px height)
- Always provide hover and focus states

## Usage in Components

When building new components, follow these principles:

1. **Use Design Tokens**: Always use the defined tokens (colors, spacing, etc.)
2. **Maintain Consistency**: Follow established patterns
3. **Consider States**: Account for hover, active, focus, disabled states
4. **Accessibility First**: Ensure keyboard navigation and screen reader support
5. **Mobile Friendly**: Touch targets, responsive sizing

## Tailwind CSS v4 Syntax

Access design tokens in your components:

```tsx
// Colors
className="bg-brand-600 text-neutral-900"

// Spacing
className="p-4 gap-6"

// Typography
className="text-lg font-medium"

// Borders
className="rounded-lg"

// Shadows
className="shadow-md"
```

All tokens are defined in `lib/styles.css` using the `@theme` directive.
