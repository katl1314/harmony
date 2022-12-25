import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
export default defineConfig(({ command, mode }) => {
	// vite에서 dotenv에 정의된 환경변수를 사용하기 위해서는 vite.config.ts에서 define(정의)해야함.
	// define객체에 프로퍼티를 정의하면 해당 프로젝트 전역에서 process.env사용시 env을 참조할 수 있음.
	const env = loadEnv(mode, process.cwd(), '');
	return {
		define: {
			'process.env': env,
		},
		server: {
			port: 3000,
		},
		plugins: [react()],
		// 절대 경로는 여러개 등록할 수 있음. resolve.alias [ { find : 절대경로 표현 방식, replacement : 절대경로가 위치하는 곳 resolve(__dirname, './src')}]
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
	};
});
