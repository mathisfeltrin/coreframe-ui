<p align="center">
  <img src="https://github.com/mathisfeltrin/coreframe-ui/raw/main/public/logo-coreframe.png" alt="CoreFrameUI Logo" width="400" />
</p>

# CoreFrameUI

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**CoreFrameUI** is a lightweight and elegant React component library, built with TypeScript and Tailwind CSS.  
Designed for scalability, reusability, and a consistent developer experience across your projects.

---

## 🚀 Features

- ⚛️ Built with **React** and **TypeScript**
- 🎨 Styled using **Tailwind CSS**
- 📦 Fully typed exports (`.d.ts`)
- 🧱 Modular design system approach (Buttons, Inputs, etc.)
- 💡 Ready for consumption via **npm** or **local linking**

---

## 📦 Installation

```bash
npm install coreframe-ui
# or
yarn add coreframe-ui
```

---

## 🔧 Usage

```tsx
import { Button } from "coreframe-ui";

function App() {
  return <Button onClick={() => alert("Clicked!")}>Click me</Button>;
}
```

If needed, import the styles:

```ts
import "coreframe-ui/dist/style.css";
```

---

## 🧱 Components (WIP)

- [x] `Button`
- [ ] `Input`
- [ ] `Checkbox`
- [ ] `Card`
- [ ] `Badge`
- [ ] `Modal`

> More coming soon...

---

## 🛠️ Development

```bash
git clone https://github.com/mathisfeltrin/coreframe-ui.git
cd coreframe-ui
npm install
npm run dev
```

To generate the library output:

```bash
npm run build
```

The build outputs:

- `dist/` → JavaScript bundles (`.cjs.js`, `.es.js`)
- `dist/index.d.ts` → Type definitions

---

## 📚 Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [vite-plugin-dts](https://github.com/qmhc/vite-plugin-dts)

---

## 📝 License

MIT © [Mathis Feltrin](https://github.com/mathisfeltrin)
