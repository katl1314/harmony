import {
	authService,
	googleAuthProvider,
	githubAuthProvider,
} from '@src/firebase.config';

type AuthServiceType = 'google' | 'github';

export class AuthService {
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
				return googleAuthProvider;
			case 'github':
				return githubAuthProvider;
			default:
				return null;
		}
	}
}
