// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; // firebase 인증 모듈
/**
 * 타입스크립트를 이용하여 리액트 앱을 작성시 process.env를 사용하기 위해서는
 * npm i --save-dev(-d) @types/node를 설지함.
 *
 * => vite에서는 process가 deprecate가 되었기 때문에 process.env를 사용할 수 없음.
 */
const firebaseConfig = {
	apiKey: process.env.VITE_FIREBASE_API_KEY,
	authDomain: process.env.VITE_FIREBASE_AUTHDOMAIN,
	projectId: process.env.VITE_FIREBASE_PROJECTID,
	storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebase.auth() => auth함수의 리턴값이 null이면 로그인 미상태
export const authService: any = firebaseApp.auth();
export const firebaseInstance = firebaseApp;
// 구글 인증 관련
// new firebase.auth.GoogleAuthProvider
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// 깃허브 인증 관련
// new firebase.auth.GithubAuthProvider
export const githubAuthProvider = new firebase.auth.GithubAuthProvider();
