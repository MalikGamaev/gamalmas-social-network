import React from "react";
import { getUsersData } from "./authReducer";

const INITILIAZED_SUCCESS = 'INITILIAZED_SUCCESS'

const initialState = {
	initialized: false
}

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITILIAZED_SUCCESS:
			return {
				...state,
				initialized: true
			}

		default:
			return state
	}
}

export const initializedSuccess = () => ({ type: INITILIAZED_SUCCESS })

export const initializeApp = () => (dispatch) => {
	const promise = dispatch(getUsersData())

	Promise.all([promise])
		.then(() => {
			dispatch(initializedSuccess())
		})


}

export default appReducer