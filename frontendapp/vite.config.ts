import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/camera",
  build: {
    outDir: 'dist',
  },
  server: {
    proxy: {
      "/api": {
        target: "https://jtjuslin.kapsi.fi",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
