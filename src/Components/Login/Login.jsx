import React from 'react';
import style from './Login.module.css'
import styleError from '../common/FormsControls/FormsControls.module.css'
import { Form } from 'react-final-form'
import { CreateField, createField, Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../State/Reducers/authReducer';
import { Navigate } from 'react-router-dom';


const LoginForm = ({ login }) => {

	return (
		<Form
			onSubmit={(formData) => {
				login(formData.email, formData.password, formData.rememberMe)
			}}>
			{({ handleSubmit, submitError }) => (
				<form onSubmit={handleSubmit}>
					{CreateField('login', 'email', Input, [required])}
					{CreateField('password', 'password', Input, [required], { type: 'password' })}
					{CreateField(null, 'rememberMe', Input, null, { type: 'checkbox' }, 'Запомните меня')}

					{submitError && <div className={styleError.formError}>
						{submitError}
					</div>}
					<div>
						<button type='submit'>Login</button>
					</div>
				</form>
			)
			}

		</Form>

	)
}



const Login = ({ isAuth, login }) => {

	if (isAuth) {
		return <Navigate to={'/content'} />
	}

	return (
		<div>
			<h1>Login</h1>
			<LoginForm login={login} />
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);