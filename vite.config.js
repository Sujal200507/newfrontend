import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const plugins = [react(), tailwindcss()];

  if (process.env.ANALYZE) {
    // Only require visualizer if ANALYZE env var is set
    const { visualizer } = require('rollup-plugin-visualizer');
    plugins.push(visualizer({ open: true }));
  }

  return {
    plugins,
  };
});
