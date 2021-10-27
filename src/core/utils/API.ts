import axios from 'axios';
import { ROUTERS, storageKey, USER } from 'core/_consts';
import { vaultService } from './storage';

const axiosConfig = {
	baseURL: 'http://localhost:3001',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
};

const instance = axios.create(axiosConfig);

// Interceptors
instance.interceptors.request.use(
	async req => {
		if ([USER.login, USER.logout].includes(req.url as string)) {
			return req;
		}
		const player = vaultService.getItem(storageKey.player);
		if (!player) {
			window.location.href = ROUTERS.LOGIN;
		}
		return req;
	},
	error => Promise.reject(error.response)
);

export default instance;
