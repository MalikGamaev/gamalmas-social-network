import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator } from '../../State/Reducers/dialogsReducer';

import { connect } from 'react-redux';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { compose } from 'redux';

const mapStateToProps = (state) => {
	return {
		dialogs: state.dialogsPage.dialogs,
		messages: state.dialogsPage.messages,
		newMessageText: state.dialogsPage.newMessageText

	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addMessages: (newMessageText) => {
			dispatch(addMessageActionCreator(newMessageText))
		}
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthNavigate
)(Dialogs);