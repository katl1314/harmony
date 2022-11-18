import axios, { AxiosResponse } from 'axios';

type ServiceType = {
	header: Object;
	body?: Object;
	params?: Object;
};

export class AxiosService implements AxiosInterface {
	get(url: string, config?: ServiceType): Promise<AxiosResponse> {
		return axios.get(url, config);
	}
	post(url: string, config?: ServiceType): Promise<AxiosResponse> {
		return axios.post(url, null, config);
	}
	patch(url: string, config?: ServiceType): Promise<AxiosResponse> {
		return axios.patch(url, config);
	}
	put(url: string, config?: ServiceType): Promise<AxiosResponse> {
		return axios.put(url, config);
	}
	delete(url: string, config?: ServiceType): Promise<AxiosResponse> {
		return axios.delete(url, config);
	}
}

// 메서드 추상화
interface AxiosInterface {
	get(url: string, config?: ServiceType): Promise<AxiosResponse>;
	post(url: string, config?: ServiceType): Promise<AxiosResponse>;
	patch(url: string, config?: ServiceType): Promise<AxiosResponse>;
	put(url: string, config?: ServiceType): Promise<AxiosResponse>;
	delete(url: string, config?: ServiceType): Promise<AxiosResponse>;
}
