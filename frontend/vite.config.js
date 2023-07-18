import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/meteo-sauvage/",
  plugins: [react()],
  server: {
    port: 3000,
  },
});
