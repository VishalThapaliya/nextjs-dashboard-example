import { defineConfig } from 'eslint/config';
import nextPlugin from '@next/eslint-plugin-next';
import js from '@eslint/js';

export default defineConfig([
  nextPlugin.configs['core-web-vitals'],
  js.configs.recommended,
]);
