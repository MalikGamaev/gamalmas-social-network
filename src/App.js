import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import { Navigate, Route, Routes } from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import NavbarContainer from './Components/Navbar/NavbarContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ContentContaner from './Components/Content/ContentContaner';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import { connect } from 'react-redux';
import { getUsersData } from './State/Reducers/authReducer';
import { initializeApp } from './State/Reducers/appReducer';
import Preloader from './Components/common/Preloader/Preloader';


const App = (props) => {
	useEffect(() => {
		props.initializeApp()
	}, [])

	if (!props.initialized) {
		return <Preloader />
	}

	return (
		<div className="app-wrapper">
			<HeaderContainer />
			<NavbarContainer />
			<div className='app-wraper-content'>
				<Routes>
					<Route path='/content/:userId?' element={<ContentContaner />} />
					<Route path='/dialogs' element={<DialogsContainer />} />
					<Route path='/users' element={<UsersContainer />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</div>
		</div >
	);
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);
