import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://cors-anywhere.herokuapp.com/https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '8a62bcee-19d5-469c-9fa9-d7cc0bdbef9f'
	}
})

export const usersAPI = {
	getUsers(page = 1, pageSize = 10) {
		return (
			instance.get(`users?page=${page}&count=${pageSize}`)
				.then(response => {
					return response.data
				})
		)
	},
	follow(userId) {
		return (
			instance.post(`follow/${userId}`)
		)
	},
	unfollow(userId) {
		return (
			instance.delete(`follow/${userId}`)
		)
	}
}

export const authAPI = {
	getAuth() {
		return (
			instance.get(`auth/me`)
		)
	},
	login(email, password, rememberMe = false) {

		return (
			instance.post(`auth/login`, { email, password, rememberMe })
		)
	},
	logout() {
		return (
			instance.delete(`auth/login`)
		)
	}
}

export const profileAPI = {
	getProfileUser(userId) {
		return (
			instance.get(`profile/${userId}`)
		)
	},
	getStatus(userId) {
		return (
			instance.get(`profile/status/${userId}`)
		)
	},
	upDateStatus(status) {
		return (
			instance.put(`profile/status/`, { status: status })
		)
	}
}