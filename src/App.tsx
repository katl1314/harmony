import Header from '@src/layout/Header';
import Content from '@src/layout/Content';
import Footer from '@src/layout/Footer';
import { UserType } from './types/Types';
import { createContext, useReducer, useEffect } from 'react';
import { userReducer } from '@src/store/userReducer';
import { authService } from './firebase.config';

// Context API를 사용하면 단계별로 props를 전달하지 않고도, 특정 컴포넌트에 데이터를 제공할 수 있음.
// 기존에는 부모에서 자식으로 일일히 props를 전달하였지만, 수 많은 단계를 가진 컴포넌트에 모두 전달하기에는 과정이 많이 번거로울 것이다.
// props를 일일히 전달하지 않고, 모든 컴포넌트에서 props를 공유할 수 있음. => 데이터를 전역으로 관리(공유)한다.
const initLoginInfo: UserType = {
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
				setUser(user);
			}
		});
	}, []);

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
