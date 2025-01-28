import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1', // Fuerza que solo escuche en localhost
    port: 3000, // Usa un puerto que no esté ocupado
    hmr: {
      overlay: false, // Desactiva errores gráficos
    },
  },
});
