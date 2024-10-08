import React from 'react';
import style from './Login.module.css'
import styleError from '../common/FormsControls/FormsControls.module.css'
import { Field, reduxForm } from 'redux-form'
import { createField, Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../State/Reducers/authReducer';
import { Navigate } from 'react-router-dom';


const LoginForm = (props) => {



	return (
		<form onSubmit={props.handleSubmit}>
			{createField('login', 'email', Input, [required])}
			{createField('password', 'password', Input, [required], { type: 'password' })}
			{createField(null, 'rememberMe', Input, null, { type: 'checkbox' }, 'Запомните меня')}

			{props.error && <div className={styleError.formError}>
				{props.error}
			</div>}
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
	const onSubmit = (formData) => {

		props.login(formData.email, formData.password, formData.rememberMe)
	}

	if (props.isAuth) {
		return <Navigate to={'/content'} />
	}

	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);