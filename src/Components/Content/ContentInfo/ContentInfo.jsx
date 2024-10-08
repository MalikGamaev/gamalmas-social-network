import React from 'react';
import s from './ContentInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import unknownUserPhoto from '../../../assets/photos/i.webp'
import ContentStatus from './ContentStatus';

const ContentInfo = (props) => {

	if (!props.profile) {
		return <Preloader />
	}

	return (
		<div>

			<div className={s.avaDescriptionBlock} >
				<img src={!props.profile.photos.large ? unknownUserPhoto : props.profile.photos.large} />
				<div className={s.descriptionBlock}>
					<div>Имя: <span style={{ fontSize: '18px', color: 'gray' }}>{props.profile.fullName}</span></div>
					<div>Статус: <span style={{ fontSize: '18px', color: 'gray' }}>{!props.profile.aboutMe ? "У пользователя нет статуса" : props.profile.aboutMe}</span> </div>
					<div>
						<ul style={{ listStyleType: 'none' }}>
							<span>Контакты:</span>
							{props.profile.contacts.facebook && <li >Facebook: <a style={{ fontSize: '15px', color: 'blue' }}>{props.profile.contacts.facebook}</a></li>}
							{props.profile.contacts.twitter && <li >Twitter: <a style={{ fontSize: '15px', color: 'blue' }}>{props.profile.contacts.twitter}</a></li>}
							{props.profile.contacts.vk && <li >Vk: <a style={{ fontSize: '15px', color: 'blue' }}>{props.profile.contacts.vk}</a></li>}
							{props.profile.contacts.instagram && <li >Instagram: <a style={{ fontSize: '15px', color: 'red' }}>{props.profile.contacts.instagram}</a></li>}
							{props.profile.contacts.github && <li>Github: <a style={{ fontSize: '15px', color: 'orange' }}>{props.profile.contacts.github}</a></li>}
						</ul>
					</div>
				</div>
			</div>
			<ContentStatus status={props.status} updateStatus={props.updateStatus} />
		</div>

	);
};

export default ContentInfo;