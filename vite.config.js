import react from "@vitejs/plugin-react"

import { defineConfig } from "vite"

import svgr from "vite-plugin-svgr"

import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react(), svgr()],

   build: {
      outDir: "build",
   },

   resolve: {
      alias: {
         hooks: path.resolve(__dirname, "./src/hooks/"),
         data: path.resolve(__dirname, "./src/data/"),
         components: path.resolve(__dirname, "./src/components/"),
         assets: path.resolve(__dirname, "./src/assets/"),
         pages: path.resolve(__dirname, "./src/pages/"),
         images: path.resolve(__dirname, "./public/image/"),
         icons: path.resolve(__dirname, "./public/image/icons/"),
         common: path.resolve(__dirname, "./src/common/"),
         utils: path.resolve(__dirname, "./src/utils/"),
         constants: path.resolve(__dirname, "./src/constants/"),
      },
   },
});
