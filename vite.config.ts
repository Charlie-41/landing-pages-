import { defineConfig } from "vite";
import { resolve } from "path";

// Proyecto multipágina: cada .html es un punto de entrada independiente
export default defineConfig({
  root: ".",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        finanzas: resolve(__dirname, "finanzas.html"),
        marketing: resolve(__dirname, "marketing.html"),
        planNegocio: resolve(__dirname, "plan-negocio.html"),
      },
    },
  },
});
