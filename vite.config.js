import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],

  build: {
    outDir: 'build',
  },

  resolve: {
    alias: {
      hooks: path.resolve(__dirname, './src/hooks/'),
      data: path.resolve(__dirname, './src/data/'),
      components: path.resolve(__dirname, './src/components/'),
      pages: path.resolve(__dirname, './src/pages/'),
    },
  },
});
