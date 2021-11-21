import axios from 'axios'

class Http {
	constructor() {
		this.instance = axios.create({
			baseURL: process.env.REACT_APP_API,
			timeout: 10000,
			headers: {
				'Content-Type': 'application/json'
			}
		})
		this.instance.interceptors.response.use(response => {}, { response })
	}
}