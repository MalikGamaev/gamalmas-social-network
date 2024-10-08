import React, { useRef } from 'react';
import s from './Post.module.css'
import likePhoto from '../../../../assets/photos/p1_2655739_c3f5edbb.png'

const Post = ({ message, likesCount, deletePost, postId }) => {

	const deletePostClick = () => {
		deletePost(postId)
	}

	return (
		<div className={s.item}>
			<img src="https://comicvine.gamespot.com/a/uploads/original/11142/111424602/8476655-6543582044-maxre.jpg" alt="" />
			<div className={s.messageAndLikeBlock} >
				<div>
					{message}
				</div>
				<div className={s.likeBlock} >
					<img src={likePhoto} />
					<span style={{ marginLeft: '5px', textShadow: '1px 1px 7px 2px  red' }}> {likesCount}</span>
				</div>
				<div>
					<button onClick={deletePostClick} >Удалить</button>
				</div>
			</div>
		</div>
	);
};

export default Post;