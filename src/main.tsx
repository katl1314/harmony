import ReactDOM from 'react-dom/client';
import App from './App';
import { Reset } from 'styled-reset';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: true,
			refetchOnMount: false,
		},
	},
});
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<QueryClientProvider client={queryClient}>
		{/* devtools */}
		<ReactQueryDevtools initialIsOpen={false} />
		<Reset />
		{/* App컴포넌트 하위에는 라우팅 시스템을 적용함. */}
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</QueryClientProvider>
);
