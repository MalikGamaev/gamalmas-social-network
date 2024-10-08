import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../State/Reducers/authReducer';
import Header from './Header'


const HeaderContainer = (props) => {
	return <Header {...props} />
};

const mapStateToProps = (state) => {
	return {
		userId: state.auth.userId,
		email: state.auth.email,
		login: state.auth.login,
		isAuth: state.auth.isAuth
	}
}

export default connect(mapStateToProps, { logout })(HeaderContainer);