import React from 'react';
import style from './Preloader.module.css'
import preloader from '../../../assets/photos/Spinner-1s-200px.svg'

const Preloader = () => {
	return (
		<div>
			<img src={preloader} />
		</div>
	);
};

export default Preloader;