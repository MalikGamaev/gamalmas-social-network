import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, deletePost } from '../../../State/Reducers/contentReducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
	return {
		posts: state.contentPage.posts,

	}
}



const MyPostsContainer = connect(mapStateToProps, { addPostActionCreator, deletePost })(MyPosts)

export default MyPostsContainer;