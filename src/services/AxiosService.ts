import axios, { AxiosResponse } from 'axios';

type ServiceType = {
	header: Object;
	body?: Object;
	params?: Object;
};

export class AxiosService {
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
