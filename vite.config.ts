import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      name: "coreframe-ui",
      fileName: "coreframe-ui",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
});
