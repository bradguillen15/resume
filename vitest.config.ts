import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'happy-dom',
      setupFiles: ['./src/test/setup.ts'],
      coverage: {
        provider: 'v8',
        include: ['src/**/*.{ts,tsx}'],
        exclude: [
          'src/test/**',
          'src/**/__tests__/**',
          'src/main.tsx',
          'src/components/ui/**',
          'src/data/**',
        ],
        reporter: ['text', 'html'],
      },
    },
  }),
);
