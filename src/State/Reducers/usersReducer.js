import React from "react";
import { usersAPI } from "../../api/API";
import { updateObjectInArray } from "../../utils/objectHelpers";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_ITEMS = 'SET_TOTAL_ITEMS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'

const initialState = {
	users: [],
	pageSize: 10,
	totalItems: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })

			}
		case UNFOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
			}
		case SET_USERS:
			return {
				...state,
				users: [...action.users]
			}
		case SET_TOTAL_ITEMS:
			return {
				...state,
				totalItems: action.count
			}
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			}
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			}
		case TOGGLE_FOLLOWING_IN_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id != action.userId)
			}
		default:
			return state;
	}
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setTotalItems = (totalItems) => ({ type: SET_TOTAL_ITEMS, count: totalItems })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingInProgress = (isFetching, userId) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId })

export const requestUsers = (page, pageSize) => async (dispatch) => {
	dispatch(toggleIsFetching(true))
	dispatch(setCurrentPage(page))
	let response = await usersAPI.getUsers(page, pageSize)
	dispatch(toggleIsFetching(false))
	dispatch(setTotalItems(response.totalCount))
	dispatch(setUsers(response.items))
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
	dispatch(toggleFollowingInProgress(true, userId))
	let response = await apiMethod(userId)
	if (response.data.resultCode === 0) {
		dispatch(actionCreator(userId))
	}
	dispatch(toggleFollowingInProgress(false, userId))
}

export const follow = (userId) => (dispatch) => {
	let apiMethod = usersAPI.follow.bind(usersAPI)
	let actionCreator = followSuccess;
	followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
}

export const unfollow = (userId) => (dispatch) => {
	let apiMethod = usersAPI.unfollow.bind(usersAPI)
	let actionCreator = unfollowSuccess;
	followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
}

export default usersReducer;