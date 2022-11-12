import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Reset } from 'styled-reset';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Reset />
		{/* App컴포넌트 하위에는 라우팅 시스템을 적용함. */}
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
