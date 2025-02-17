import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
// import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, './src')
    }
  }
})
