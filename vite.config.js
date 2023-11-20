import { defineConfig } from 'vite'
import { TailwindCSSVitePlugin } from 'tailwindcss-vite-plugin';

export default defineConfig({
    plugins: [
      TailwindCSSVitePlugin({
        entry: 'src/style/in.css',
      }),
    ],
  });