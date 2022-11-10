import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	// 절대 경로는 여러개 등록할 수 있음.
	resolve: {
		alias: [
			{
				find: '@src',
				replacement: resolve(__dirname, './src'),
			},
			{
				find: '@components',
				replacement: resolve(__dirname, './src/components'),
			},
		],
	},
});
