import { resolve } from 'path';
import { defineConfig } from 'vitest/config';
import eslint from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/REACT2023Q1/react.forms',
  plugins: [react(), tsconfigPaths(), eslint()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.js',
    coverage: {
      reportsDirectory: './src/tests/coverage',
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
