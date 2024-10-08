import React from 'react';
import contentReducer from './Reducers/contentReducer';
import dialogsReducer from './Reducers/dialogsReducer';



const store = {
	_state: {
		contentPage: {
			posts: [
				{ message: 'hi', likesCount: 35 },
				{ message: 'fsef', likesCount: 355 },
				{ message: 'hisdfs', likesCount: 335 },
				{ message: 'hawdi', likesCount: 352 },
			],
			newPostText: ''
		},
		dialogsPage: {
			dialogs: [
				{ id: 1, name: 'Malik' },
				{ id: 2, name: 'Musa' },
				{ id: 3, name: 'Maga' },
				{ id: 4, name: 'Masud' },
				{ id: 5, name: 'Medina' },
			],
			messages: [],
			newMessageText: ''
		},
		setBar: {
			friends: [
				{
					name: 'Malik'
				},
				{
					name: 'Musa'
				},
				{
					name: 'Maga'
				},
			]
		}
	},
	_rerenderEntireTree() {
		console.log('ehhhey')
	},

	getState() {
		return this._state
	},
	subcribe(observer) {
		this._rerenderEntireTree = observer
	},

	dispatch(action) {
		this._state.contentPage = contentReducer(this._state.contentPage, action)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._rerenderEntireTree(this._state)
	}
}


export default store;









