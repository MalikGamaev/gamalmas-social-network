import React from 'react';
import s from './Header.module.css'
import { NavLink } from 'react-router-dom';



const Header = (props) => {

	const logout = () => {
		props.logout()
	}
	return (
		<header className={s.head}>

			<img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1705795200&semt=sph" />

			<div className={s.login}>
				{props.isAuth ? <div>{props.login} <br /> <button onClick={logout}>Выйти</button></div> : <NavLink to='/login'>Login</NavLink>}
			</div>
		</header>
	);
};

export default Header;