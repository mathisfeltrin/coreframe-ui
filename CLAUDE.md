# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CoreFrameUI is a React component library with an Apple-inspired design system, built with TypeScript and Tailwind CSS v4. The library is designed to be published on npm and consumed by other projects.

## Key Architecture

### Dual Directory Structure

The project uses a unique two-directory approach:

**`lib/` - Library Source Code (Published to npm)**
- Contains the actual component library code
- Entry point: `lib/index.ts` exports all public components
- Components organized in subdirectories (e.g., `lib/Button/Button.tsx`)
- `lib/styles.css` contains the design system using Tailwind v4's `@theme` directive

**`src/` - Demo Application (Development Only)**
- Demo app for testing and showcasing components during development
- Uses path alias `"coreframe-ui"` → `./lib/index.ts` (defined in `tsconfig.app.json`)
- Import components as `import { Button } from "coreframe-ui"` to test consumer experience
- `src/App.tsx` serves as a living showcase of all components

### Build System

Vite is configured specifically for library mode (not demo app):
- Entry: `lib/index.ts` (vite.config.ts:11)
- Outputs: ESM (`.js`) and CommonJS (`.umd.cjs`) formats in `dist/`
- CSS is processed and bundled to `dist/style.css`
- React/ReactDOM are externalized (not bundled with the library)
- TypeScript declarations generated via `tsc -b` before Vite build

## Design System Architecture

### Tailwind CSS v4 with @theme

The design system is defined in `lib/styles.css` using Tailwind v4's `@theme` directive:

```css
@import "tailwindcss";

@theme {
  --color-brand-500: #0ea5e9;  /* Brand blue from logo */
  --color-neutral-900: #171717; /* Text colors */
  /* ... more tokens */
}
```

**Key Points:**
- No `tailwind.config.js` needed in v4
- All design tokens are CSS variables in `@theme` block
- Brand color (`brand-*`) extracted from CoreFrame logo
- Apple-inspired neutrals, generous spacing, smooth animations

### Component Pattern

All components follow this pattern (see Button for reference):

```tsx
interface ComponentProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

export const Component = ({ children, variant = "primary", ... }) => {
  // Use design tokens: bg-brand-600, text-neutral-900, rounded-lg, etc.
  return <element className="...">{children}</element>;
};
```

**Component Guidelines:**
- Use design tokens from `lib/styles.css` (colors: `brand-*`, `neutral-*`, etc.)
- Support variants (primary/secondary/outline), sizes (sm/md/lg), disabled state
- Include hover, active, focus states
- Use Tailwind utility classes with design tokens
- Export from `lib/index.ts`

## Common Commands

```bash
# Development
npm run dev          # Start dev server with demo app (src/)
npm run build        # Build library (tsc + vite) → dist/
npm run lint         # ESLint check
npm run preview      # Preview built library

# Publishing (when ready)
npm run publish      # Build + publish to npm
```

## Component Development Workflow

1. Create component in `lib/ComponentName/ComponentName.tsx`
2. Define props interface with TypeScript
3. Use design tokens from `lib/styles.css` (`bg-brand-600`, `text-neutral-900`, etc.)
4. Export from `lib/index.ts`: `export { ComponentName } from "./ComponentName/ComponentName";`
5. Test in `src/App.tsx` by importing from `"coreframe-ui"`
6. Run `npm run dev` to see it in demo app
7. Build with `npm run build` to generate `dist/`

## Component Roadmap

Components are planned in 5 phases (see README.md for full details):

**Phase 1: Form Foundations** - Input, Label, Textarea, Select
**Phase 2: Form Controls** - Checkbox, Radio, Switch, Slider
**Phase 3: Content Display** - Card, Badge, Avatar, Divider
**Phase 4: Feedback & Overlays** - Alert, Toast, Modal, Spinner
**Phase 5: Navigation** - Tabs, Breadcrumb, Pagination, Menu/Dropdown

Follow this order for consistency and logical dependencies between components.

## Design System Reference

See `DESIGN_SYSTEM.md` for comprehensive documentation including:
- Color palettes (brand, neutral, semantic colors)
- Typography scale (xs to 5xl)
- Spacing system (4px to 96px multiples)
- Border radius, shadows, transitions
- Component-specific guidelines

**Key Design Tokens:**
- Colors: `brand-*`, `neutral-*`, `success-*`, `error-*`, `warning-*`, `info-*`
- Spacing: Use standard Tailwind scale (1-24)
- Typography: `text-xs` to `text-5xl`, `font-medium`, `font-semibold`
- Borders: `rounded-lg`, `rounded-xl`, `rounded-full`
- Shadows: `shadow-sm`, `shadow-md`, `shadow-lg`

## TypeScript Configuration

- Strict mode enabled with additional linting rules
- JSX transform: `react-jsx` (no React import needed)
- Module resolution: `bundler` mode (modern Vite)
- Path alias: `"coreframe-ui": ["./lib/index.ts"]` for local testing

## Important Notes

- **Tailwind v4 syntax**: Use `@import "tailwindcss"` and `@theme` directive, not old v3 directives
- **PostCSS plugin**: Use `@tailwindcss/postcss`, not `tailwindcss` in `postcss.config.js`
- **CSS import**: `lib/index.ts` imports `./styles.css` to bundle styles with library
- **Demo app CSS**: `src/main.tsx` imports `../lib/styles.css` for development
- **Accessibility-first**: All components should support keyboard navigation and ARIA attributes
- **Apple-inspired**: Clean, minimalist, generous spacing, smooth transitions
