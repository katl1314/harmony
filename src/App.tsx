import Header from '@src/layout/Header';
import Content from '@src/layout/Content';
import Footer from '@src/layout/Footer';
import { UserType } from './types/Types';
import { createContext, useReducer, useEffect } from 'react';
import { userReducer } from '@src/store/userReducer';
import { authService } from './firebase.config';

const userInfo = JSON.parse(sessionStorage.getItem('user') as string);

const initLoginInfo: UserType = userInfo ?? {
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
		authService.onAuthStateChanged((user: UserType) => {
			if (user) {
				const { displayName, email, photoURL, uid } = user;
				setUser({ displayName, email, photoURL, uid });
				sessionStorage.setItem(
					'user',
					JSON.stringify({ displayName, email, photoURL, uid })
				);
			}
		});
	}, [user.uid]);

	return (
		<AppContext.Provider value={user}>
			<div className="App">
				<Header></Header>
				<Content></Content>
				<Footer></Footer>
			</div>
		</AppContext.Provider>
	);
}

export default App;
