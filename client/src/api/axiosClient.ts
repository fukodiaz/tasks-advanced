import axios from 'axios'
import queryString from 'query-string'

const apiBase = 'http://127.0.0.1:3001/api/v1/'

const axiosClient = axios.create({
	baseURL: apiBase,
	paramsSerializer: params => queryString.stringify({ params })
})

axiosClient.interceptors.request.use(async (config: any) => {
	return {
		...config,
		headers: {
			'Content-Type': 'application/json'
		}
	}
})

axiosClient.interceptors.response.use(response => {
	if (response && response.data) return response.data
	return response
}, err => {
	if (!err.response) { 
		return alert(err) 
	}
	throw err.response
})

export default axiosClient