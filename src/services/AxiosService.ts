import axios from 'axios';

axios.defaults.withCredentials = true;

const config = {
	baseURL: 'http://127.0.0.1:8080/api',
	headers: {
		'Content-Type': 'application/json',
	},
}

export const service = axios.create(config);
