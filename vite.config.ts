import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'example',
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/useSpline.ts'),
      name: 'useSpline',
      formats: ['es', 'cjs'],
      fileName: (format) => `useSpline.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['@splinetool/loader', '@react-three/fiber'],
      output: {
        // Override dist folder because root is in the example/ folder
        dir: 'dist',
      },
    },
  },
})
