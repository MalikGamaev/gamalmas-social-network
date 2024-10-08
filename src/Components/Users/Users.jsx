import React from "react";
import style from './Users.module.css'
import userPhoto from './../../assets/photos/i.webp'
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


const Users = ({ totalItems, pageSize, currentPage, onChangeCurrentPage, users, followingInProgress, unfollow, follow }) => {




	return (

		<div className={style.usersBlock}>
			<Paginator totalItemsCount={totalItems} pageSize={pageSize} currentPage={currentPage} onChangeCurrentPage={onChangeCurrentPage} />
			{users.map(u => <User user={u} followingInProgress={followingInProgress} follow={follow} unfollow={unfollow} userPhoto={userPhoto} />
			)}
		</div>
	)
}


export default Users;
