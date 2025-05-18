import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { mochaPlugins } from "@getmocha/vite-plugins";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react()],
  base: '/PortFolio/',
  server: {
    allowedHosts: true,
  },
  build: {
    chunkSizeWarningLimit: 5000,
  },
});
