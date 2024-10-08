import React, { useEffect } from 'react';
import s from './Content.module.css'
import Content from './Content';
import { connect } from 'react-redux';
import { getProfileThunkCreator, } from '../../State/Reducers/contentReducer';

import withRouter from '../common/WithRouter/withRouter';
import { Navigate } from 'react-router-dom';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { compose } from 'redux';
import { getProfile, getStatus, updateStatus } from '../../State/Reducers/contentReducer';


const ContentContainer = (props) => {

	useEffect(() => {
		let userId = props.match.params.userId
		if (!userId) {
			userId = props.userId
		}
		props.getProfile(userId)

		props.getStatus(userId)
	}, [])



	return <Content {...props} profile={props.profile} updateStatus={props.updateStatus} status={props.status} />
};

const mapStateToProps = (state) => {
	return {
		profile: state.contentPage.profile,
		status: state.contentPage.status,
		userId: state.auth.userId
	}
}

export default compose(
	connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
	withRouter,
	withAuthNavigate
)(ContentContainer)

