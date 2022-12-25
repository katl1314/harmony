import axios, { AxiosResponse } from 'axios';
import { ServiceType } from '@src/types/Types';

axios.defaults.withCredentials = true;

class AxiosService {
	readonly domain: string = 'http://127.0.0.1:8080/api';

	get(url: string, config?: ServiceType): Promise<AxiosResponse> {
		return axios.get(this.createUrl(url), config);
	}
	post(url: string, config?: ServiceType): Promise<AxiosResponse> {
		return axios.post(this.createUrl(url), null, config);
	}
	patch(url: string, config?: ServiceType): Promise<AxiosResponse> {
		return axios.patch(this.createUrl(url), config);
	}
	put(url: string, config?: ServiceType): Promise<AxiosResponse> {
		return axios.put(this.createUrl(url), config);
	}
	delete(url: string, config?: ServiceType): Promise<AxiosResponse> {
		return axios.delete(this.createUrl(url), config);
	}

	createUrl(url: string) {
		return `${this.domain}${url}`;
	}
}

export default AxiosService;
