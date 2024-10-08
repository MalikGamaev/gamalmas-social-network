import React from 'react';
import style from './Users.module.css'
import { NavLink } from 'react-router-dom';

const User = ({ user, followingInProgress, follow, unfollow, userPhoto }) => {
	return (
		<div className={style.userBlock} key={user.id}>
			<div>
				<NavLink to={'/content/' + user.id}><img src={user.photos.small != null ? user.photos.small : userPhoto} /></NavLink>
			</div>
			<div>
				{user.followed
					? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => unfollow(user.id)}>Unfollow</button>
					: <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => follow(user.id)}>Follow</button>
				}
			</div>


			<div>
				<div>{user.name}</div>
				<div>{user.status}</div>
			</div>
			<div>
				<div>{'user.location.city'}</div>
				<div>{'user.location.country'}</div>
			</div>
		</div>
	);
};

export default User;