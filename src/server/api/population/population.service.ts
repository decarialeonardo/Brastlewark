import axios, { AxiosInstance, AxiosPromise } from 'axios';
import config from '../../config';

export class PopulationService {
    private http: AxiosInstance;

	constructor() {
		this.http = axios.create();
	}

	getPopulation(): AxiosPromise<any> {
        return this.http.get(`${ config.api }`);
	}
}