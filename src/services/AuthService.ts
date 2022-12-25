import {
	authService,
	googleAuthProvider,
	githubAuthProvider,
} from '@src/firebase.config';

import { AuthServiceType } from '@src/types/Types';

class AuthService {
	login(name: AuthServiceType) {
		const provider = this.getProvider(name);
		if (!provider) {
			return provider;
		}
		return authService.signInWithPopup(provider);
	}

	getProvider(name: AuthServiceType) {
		switch (name) {
			case 'google':
				// new firebase.auth.GoogleAuthProvider();
				return googleAuthProvider;
			case 'github':
				// new firebase.auth.GithubAuthProvider();
				return githubAuthProvider;
			default:
				return null;
		}
	}

	async logout() {
		await authService.signOut();
	}
}

export default AuthService;
