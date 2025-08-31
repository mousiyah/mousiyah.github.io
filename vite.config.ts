import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
      },
    },
    // Ensure proper MIME types
    assetsInlineLimit: 0,
  },
  // Ensure proper MIME types for GitHub Pages
  server: {
    headers: {
      "Content-Type": "application/javascript",
    },
  },
});
