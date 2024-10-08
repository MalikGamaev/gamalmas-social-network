import { profileAPI } from "../../api/API"

const ADD_POST = 'ADD-POST'
const ADD_POST_TEXT = 'ADD-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const DELETE_POST = 'DELETE_POST'

let initialState = {
	posts: [
		{ id: 0, message: 'hi', likesCount: 35 },
		{ id: 1, message: 'fsef', likesCount: 355 },
		{ id: 2, message: 'hisdfs', likesCount: 335 },
		{ id: 3, message: 'hawdi', likesCount: 352 },
	],
	newPostText: '',
	profile: null,
	status: ''
}

const contentReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 5,
				message: action.newPostText,
				likesCount: 0
			}

			return {
				...state,
				posts: [...state.posts, newPost]
			}

		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter(p => p.id != action.postId)
			}

		case ADD_POST_TEXT:

			return {
				...state,
				newPostText: action.postText
			}

		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			}

		case SET_USER_STATUS:
			return {
				...state,
				status: action.status
			}
		default:
			return state;
	}

}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })



export const getProfile = (userId) => async (dispatch) => {
	let response = await profileAPI.getProfileUser(userId)

	dispatch(setUserProfile(response.data))

}



export const getStatus = (userId) => async (dispatch) => {
	let response = await profileAPI.getStatus(userId)

	dispatch(setUserStatus(response.data))

}


export const updateStatus = (status) => async (dispatch) => {
	let response = await profileAPI.upDateStatus(status)

	if (response.data.resultCode === 0) {
		dispatch(setUserStatus(status))
	}

}


export default contentReducer;