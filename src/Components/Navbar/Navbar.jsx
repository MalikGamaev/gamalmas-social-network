import React, { useContext } from 'react';
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom';
import FriendBar from './FriendsBar/FriendBar';


const Navbar = ({ friends }) => {
	return (

		<nav className={s.nav}>
			<div className={s.item}>
				<NavLink to={'/content'}>Profile</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to={'/dialogs'}>Dialogs</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to={'/news'}>News</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to={'/music'}>Music</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to={'/setting'}>Setting</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to={'/users'}>Find Users</NavLink>
			</div>
			<div className={s.friendsBlock}>
				<div className={s.friendsTitle}>
					Friends
				</div>
				<div className={s.friendsItem}>
					{friends.map(friend => <FriendBar name={friend.name} />)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;