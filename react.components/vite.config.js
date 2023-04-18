import { resolve } from 'path';
import { defineConfig } from 'vitest/config';
import eslint from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  base: '/REACT2023Q1/React.API',
  build: {
    sourcemap: true,
  },
  plugins: [
    react(),
    tsconfigPaths(),
    eslint(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.js',
    coverage: {
      provider: 'istanbul',
      reportsDirectory: './src/tests/coverage',
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
