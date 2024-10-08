const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
	dialogs: [
		{ id: 1, name: 'Malik' },
		{ id: 2, name: 'Musa' },
		{ id: 3, name: 'Maga' },
		{ id: 4, name: 'Masud' },
		{ id: 5, name: 'Medina' },
	],
	messages: [],

}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:

			return {
				...state,
				messages: [...state.messages, { id: 1, message: action.newMessageText }]
			}

		default:
			return state;
	}
}

export const addMessageActionCreator = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText })

export default dialogsReducer;