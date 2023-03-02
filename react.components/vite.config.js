import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/elijah-i-REACT2023Q1/react.components',
  plugins: [react(), tsconfigPaths()],
});
