import axios from 'axios'

export function request(config) {
	const instance = axios.create({
		baseURL: 'http://www.app-echo.com/api',
		timeout: 3000
	})
	
	axios.interceptors.request.use(
		res => {
			return res
		},
		err => {
			console.log(err)
		}
	)
	
	axios.interceptors.response.use(
		res => {
			return res
		},
		err => {
			console.log(err)
		}
	)
	
	return instance(config)
}