import ReactDOM from 'react-dom/client';
import App from './App';
import { Reset } from 'styled-reset';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import {
	RecoilRoot, // 하위 모든 컴포넌트에서 recoil을 사용하기 위해서는 React-Query처럼 RecoilRoot를 감싸야함.
} from 'recoil';
// react-query config
export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: true,
			refetchOnMount: false,
		},
	},
});
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<RecoilRoot>
		<QueryClientProvider client={queryClient}>
			{/* devtools */}
			<ReactQueryDevtools initialIsOpen={false} />
			<Reset />
			{/* App컴포넌트 하위에는 라우팅 시스템을 적용함. */}
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</QueryClientProvider>
	</RecoilRoot>
);
