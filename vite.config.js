import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // ❌ REMOVE or COMMENT OUT the base path!
  base: '/sweetspot-react/',
});
