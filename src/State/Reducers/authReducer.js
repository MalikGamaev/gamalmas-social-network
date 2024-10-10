import React from "react";
import { authAPI } from "../../api/API";
import { FORM_ERROR } from "final-form";

const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload,

			}

		default:
			return state
	}
}

export const setUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })

export const getUsersData = () => async (dispatch) => {
	let response = await authAPI.getAuth()

	if (response.data.resultCode === 0) {
		let { id, email, login } = response.data.data
		dispatch(setUserData(id, email, login, true))
	}

}



export const login = (email, password, rememberMe = false) => async (dispatch) => {

	let response = await authAPI.login(email, password, rememberMe)

	if (response.data.resultCode === 0) {
		dispatch(getUsersData())
	} else {
		return { [FORM_ERROR]: response.data.messages[0] }
	}


}

export const logout = () => async (dispatch) => {

	let response = await authAPI.logout()

	if (response.data.resultCode === 0) {
		dispatch(setUserData(null, null, null, false))
	}


}


export default authReducer