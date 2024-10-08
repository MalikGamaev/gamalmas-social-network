import React from 'react';
import s from './FriendBar.module.css'

const Friend = ({ name }) => {

	return (
		<div className={s.friendBlock}>
			<img src="https://leader-id.storage.yandexcloud.net/user_photo/2359058/616967607d0e9797289558_360.jpg" />
			<div>
				{name}
			</div>
		</div>
	);
};

export default Friend;