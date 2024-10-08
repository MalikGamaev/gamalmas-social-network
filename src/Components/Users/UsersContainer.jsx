import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, unfollow, setCurrentPage, requestUsers } from '../../State/Reducers/usersReducer';
import Preloader from '../common/Preloader/Preloader';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalItems, getUsers } from '../../State/Selectors/usersSelectors';


const UsersContainer = (props) => {
	useEffect(() => {
		props.getUsers(props.currentPage, props.pageSize)
	}, [])

	const onChangeCurrentPage = (p) => {
		props.setCurrentPage(p)
		props.getUsers(p, props.pageSize)

	}

	return <>
		{props.isFetching ? <Preloader /> : <Users
			users={props.users}
			totalItems={props.totalItems}
			currentPage={props.currentPage}
			pageSize={props.pageSize}
			onChangeCurrentPage={onChangeCurrentPage}
			follow={props.follow}
			unfollow={props.unfollow}
			followingInProgress={props.followingInProgress}

		/>
		}

	</>
}

const mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalItems: getTotalItems(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state)
	}
}

const authNavigateContainer = withAuthNavigate(UsersContainer)



export default compose(
	connect(mapStateToProps, { follow, unfollow, setCurrentPage, getUsers: requestUsers }),

)(UsersContainer)