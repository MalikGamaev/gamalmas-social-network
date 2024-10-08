import React, { createRef } from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../../utils/validators/validators';

const maxLength15 = maxLengthCreator(15)

const MyPosts = ({ posts, addPostActionCreator, deletePost }) => {

	const newPost = (values) => {
		addPostActionCreator(values.newPostText)
	}

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<AddPostFormRedux onSubmit={newPost} />
			<div className={s.postBlock}>
				{
					posts.map((post) =>
						<Post message={post.message} likesCount={post.likesCount} deletePost={deletePost} postId={post.id} />
					)
				}

			</div>
		</div >
	);

};

const AddPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field name='newPostText' component={Textarea} placeholder='Add post!' validate={[required, maxLength15]} />
			</div>
			<div>
				<button>
					Add post
				</button>
			</div>
		</form>
	)
}

const AddPostFormRedux = reduxForm({ form: 'addMyPostForm' })(AddPostForm)

export default MyPosts;