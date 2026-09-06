import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    VitePWA({
      registerType: "autoUpdate",

      manifest: {
        name: "JKPrefix",
        short_name: "JKPrefix",
        description: "JKPrefix Wall Putty and Construction Chemicals",
        theme_color: "#F6F5F0",
        background_color: "#F6F5F0",
        display: "standalone",

        icons: [
          {
            src: "/pwalogo.png",
            sizes: "1024x1024",
            type: "image/png",
          },
        ],
      },
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
    },
  },
});