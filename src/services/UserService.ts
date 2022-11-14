import axios, { AxiosResponse } from 'axios';

type HtmlMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

type ServiceType = {
	header: Object;
	body?: Object;
	method?: HtmlMethod;
	params?: Object;
};

// Factory pattern : 객체를 생성하기 위한 인터페이스를 정의하는데, 어떤 클래스의 인스턴스를 만들어지는 서브클래스에서 결정함.
// 즉 팩토리 패턴을 이용하면 인스턴스 생성을 메인 클래스가 아닌 서브 클래스에서 결정함.
export class UserFactory {
	public createService(method: HtmlMethod) {
		if (method === 'get') {
			return new UserGetService();
		}

		if (method === 'post') {
			return new UserPostService();
		}

		if (method === 'put') {
			return new UserPutService();
		}

		if (method === 'patch') {
			return new UserPatchService();
		}

		if (method === 'delete') {
			return new UserDeleteService();
		}
	}
}

// 메서드 추상화
interface UserServiceInterface {
	fetch(url: string, config?: ServiceType): Promise<AxiosResponse>;
}

class UserGetService implements UserServiceInterface {
	fetch(url: string, config?: ServiceType) {
		return axios.get(url, { ...config });
	}
}

class UserPostService implements UserServiceInterface {
	fetch(url: string, config?: ServiceType) {
		// axios는 data를 query으로 변환시키지 못함.
		// 다만 axios의 두번째 인자를 null, 세번째 인자로 config객체를 전달하면 정상적으로 동작함.
		return axios.post(url, null, { ...config });
	}
}

class UserPutService implements UserServiceInterface {
	fetch(url: string, config?: ServiceType) {
		return axios.put(url, { ...config });
	}
}

class UserPatchService implements UserServiceInterface {
	fetch(url: string, config?: ServiceType): Promise<AxiosResponse<any, any>> {
		return axios.patch(url, { ...config });
	}
}

class UserDeleteService implements UserServiceInterface {
	fetch(url: string, config?: ServiceType): Promise<AxiosResponse<any, any>> {
		return axios.delete(url, { ...config });
	}
}
