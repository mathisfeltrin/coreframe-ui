<p align="center">
  <img src="https://github.com/mathisfeltrin/coreframe-ui/raw/main/public/logo-coreframe.png" alt="CoreFrameUI Logo" width="400" />
</p>

# CoreFrameUI

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**CoreFrameUI** is a modern and elegant React component library with an Apple-inspired design system.
Built with TypeScript and Tailwind CSS v4, designed for scalability, accessibility, and exceptional developer experience.

---

## ✨ Features

- ⚛️ Built with **React 19** and **TypeScript**
- 🎨 **Apple-inspired design system** with Tailwind CSS v4
- 🎯 **Brand-aligned colors** extracted from CoreFrame identity
- ♿ **Accessibility-first** approach
- 📦 **Fully typed** exports with TypeScript definitions
- 🧱 **Modular components** with consistent API
- 🌗 **Theme-ready** architecture (coming soon)
- 💡 Ready for consumption via **npm**

---

## 📦 Installation

```bash
npm install coreframe-ui
# or
yarn add coreframe-ui
# or
pnpm add coreframe-ui
```

---

## 🚀 Quick Start

```tsx
import { Button } from "coreframe-ui";
import "coreframe-ui/dist/style.css";

function App() {
  return (
    <Button variant="primary" size="md" onClick={() => console.log("Clicked!")}>
      Click me
    </Button>
  );
}
```

---

## 🧱 Components

### Available

- [x] **Button** - Primary, secondary, and outline variants with 3 sizes

### Coming Soon

See our [Component Roadmap](#-component-roadmap) below for upcoming components.

---

## 🎨 Design System

CoreFrameUI features a comprehensive design system inspired by Apple's design philosophy:

- **Brand Colors**: Modern cyan-blue from CoreFrame logo
- **Typography**: Clear hierarchy with 9 size variants
- **Spacing**: Generous, Apple-style spacing (4px to 96px)
- **Shadows**: Subtle depth without overwhelming
- **Transitions**: Smooth, 150-500ms animations
- **Accessibility**: WCAG-compliant contrast ratios

👉 **[View Full Design System Documentation](./DESIGN_SYSTEM.md)**

---

## 🛠️ Development

### Setup

```bash
git clone https://github.com/mathisfeltrin/coreframe-ui.git
cd coreframe-ui
npm install
```

### Commands

```bash
# Start development server with demo app
npm run dev

# Build the library for distribution
npm run build

# Lint the codebase
npm run lint

# Preview the built library
npm run preview

# Run tests
npm test              # Run tests in watch mode
npm run test:run      # Run tests once
npm run test:ui       # Open test UI in browser
npm run test:coverage # Run tests with coverage report
```

### Project Structure

```
coreframe-ui/
├── lib/                  # Library source code (gets published)
│   ├── index.ts         # Main entry point
│   ├── styles.css       # Design system tokens
│   └── Button/          # Component directory
├── src/                 # Demo app for testing components
├── dist/                # Built output (generated)
└── DESIGN_SYSTEM.md     # Design system documentation
```

---

## 📚 Tech Stack

- [React 19](https://react.dev/)
- [TypeScript 5.8](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Vite 7](https://vitejs.dev/)
- [PostCSS](https://postcss.org/)

---

## 🗺️ Component Roadmap

Components planned in order of implementation:

**Phase 1: Form Foundations** (Essential form elements)
1. Input - Text, email, password, number inputs
2. Label - Accessible form labels
3. Textarea - Multi-line text input
4. Select - Dropdown selection

**Phase 2: Form Controls** (User input components)
5. Checkbox - Single and group checkboxes
6. Radio - Radio button groups
7. Switch - Toggle switch
8. Slider - Range input

**Phase 3: Content Display** (Layout and content)
9. Card - Container component
10. Badge - Status indicators
11. Avatar - User profile images
12. Divider - Visual separator

**Phase 4: Feedback & Overlays** (User feedback)
13. Alert - Inline messages
14. Toast - Notifications
15. Modal - Dialog overlays
16. Spinner - Loading indicator

**Phase 5: Navigation** (App navigation)
17. Tabs - Tabbed navigation
18. Breadcrumb - Page hierarchy
19. Pagination - Page navigation
20. Menu/Dropdown - Contextual menus

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📝 License

MIT © [Mathis Feltrin](https://github.com/mathisfeltrin)

---

## 🔗 Links

- [Design System Documentation](./DESIGN_SYSTEM.md)
- [GitHub Repository](https://github.com/mathisfeltrin/coreframe-ui)
- [Issue Tracker](https://github.com/mathisfeltrin/coreframe-ui/issues)
