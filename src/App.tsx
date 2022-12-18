import Header from '@src/layout/Header';
import { UserType } from './types/Types';
import { createContext, useReducer, useEffect } from 'react';
import { userReducer } from '@src/store/userReducer';
import { authService } from './firebase.config';
import { ServiceFactory } from './services/ServiceFactory';
import Login from '@src/pages/Login';
import { Routes, Route } from 'react-router-dom';
import Community from '@src/pages/content/Community';
import styled from 'styled-components';
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
		// 로그인이 성공하면 firebaseApp.auth().onAuthStateChanged이벤트 핸들러 실행함.
		persistentAuth();
	}, []);

	const persistentAuth = async () => {
		await authService.setPersistence('session');
		authService.onAuthStateChanged(authStateChanged);
	};

	const authStateChanged = async (data: UserType) => {
		if (data) {
			const { displayName, email, photoURL, uid } = data;
			setUser({ displayName, email, photoURL, uid });
			const config = {
				header: { 'Content-Type': 'application/json' },
				params: { displayName, email, photoURL, uid },
			};
			await ServiceFactory.AxiosService.post(
				'http://localhost:8080/api/user/register',
				config
			);
		}
	};
	return (
		<AppContext.Provider value={user}>
			<div className="App">
				<Header />
				<Main>
					<Routes>
						<Route path="/login" element={<Login />}></Route>
						<Route path="/*" element={<Community />}></Route>
					</Routes>
				</Main>
			</div>
		</AppContext.Provider>
	);
}

const Main = styled.main`
	width: 80%;
	margin: 2em auto;
	display: flex;
	justify-content: center;
`;

export default App;
