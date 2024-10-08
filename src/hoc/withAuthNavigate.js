import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const mapStateToNavigateComponent = (state) => {
	return {
		isAuth: state.auth.isAuth
	}


}

export const withAuthNavigate = (Component) => {

	const NavigateComponent = (props) => {

		if (!props.isAuth) {
			if (props.match) {
				if (props.match.params.userId) {
					return <Component {...props} />
				}
				return <Navigate to={'/login'} />
			}

			return <Navigate to={'/login'} />
		}
		return <Component {...props} />
	}

	return connect(mapStateToNavigateComponent)(NavigateComponent);
}