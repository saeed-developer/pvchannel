import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import { VitePWA } from 'vite-plugin-pwa';
// import { createPWA } from 'vite-plugin-pwa';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // VitePWA(pwaOptions),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [],
      // includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'pvchannel',
        short_name: 'pvchannel',
        description: 'chat platform',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/chat.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        start_url: '/',
        lang: 'en-US',
        orientation: 'portrait-primary',
      },
    }),
  ],
});
