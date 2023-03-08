import { resolve } from 'path';
import { configDefaults, defineConfig } from 'vitest/config';
import eslint from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/REACT2023Q1/react.components',
  plugins: [react(), tsconfigPaths(), eslint()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.js',
    coverage: {
      all: true,
      exclude: [
        ...configDefaults.exclude,
        'src/types/**',
        '**/*.d.ts',
        'src/tests/**',
        '**/*.test.*',
      ],
      reportsDirectory: './src/tests/coverage',
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
