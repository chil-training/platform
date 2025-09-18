import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// The base path is set to the environment variable, or '/' for local development
// const VITE_BASE_PATH = process.env.VITE_BASE_PATH || '/';
const VITE_BASE_PATH = '/hds-training-vite/';

// https://vite.dev/config/
export default defineConfig({
  base: VITE_BASE_PATH,
  plugins: [
    tailwindcss(),
    react()
  ],
})
