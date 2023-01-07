import Header from '@src/layout/Header';
import { UserType } from './types/Types';
import { createContext, useReducer, useEffect } from 'react';
import { userReducer } from '@src/store/userReducer';
import { authService } from './firebase.config';
import { service } from '@src/services/AxiosService';
import Login from '@src/pages/Login';
import { Routes, Route } from 'react-router-dom';
import Community from '@src/pages/content/Community';
import styled from 'styled-components';

// zustand only test => to recoil
// import useStore from '@src/store/store';

// Object.keys sessionStorage는 Object이며 key로 구성된 배열을 반환함.
const sessionStorageKey = Object.keys(sessionStorage);
let isLogin = false;
let userInfo = null;

if (sessionStorageKey.length > 0) {
	for (const key of sessionStorageKey) {
		isLogin = key.startsWith('firebase:authUser');
		userInfo = JSON.parse(sessionStorage.getItem(key) as string);
	}
}

const initLoginInfo: UserType = isLogin
	? userInfo
	: {
			uid: null,
			displayName: null,
			photoURL: null,
			email: null,
	  };

export const AppContext = createContext<UserType>(initLoginInfo);

function App() {
	const [user, setUser] = useReducer(userReducer, initLoginInfo);

	useEffect(() => {
		persistentAuth();
	}, []);

	const persistentAuth = async () => {
		await authService.setPersistence('session');
		authService.onAuthStateChanged(authStateChanged);
	};

	const authStateChanged = async (data: UserType) => {
		if (data) {
			const { displayName, email, photoURL, uid } = data;
			const url = '/user/register';
			setUser({ displayName, email, photoURL, uid });
			const body = { displayName, email, photoURL, uid };
			await service.post(url, body);
		}
	};
	return (
		<AppContext.Provider value={user}>
			<div className="App">
				<Header />
				<Body>
					<Routes>
						<Route path="/login" element={<Login />}></Route>
						<Route path="/*" element={<Community />}></Route>
					</Routes>
				</Body>
			</div>
		</AppContext.Provider>
	);
}

const Body = styled.main`
	margin: 2em auto;
	display: flex;
	justify-content: center;

	// 태블릿
	@media screen and (max-width: 1023px) {
		width: 80%;
	}
`;

export default App;
