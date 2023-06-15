import axiosClient from "./axiosClient"

const authApi = {
	signup: (params: any) => axiosClient.post('auth/signup', params),
	login: (params: any) => axiosClient.post('auth/login', params)
}

export default authApi

